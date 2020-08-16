const { LinkedList, Node } = require('./../util/LinkedListX');
const { test, assert } = require('../../test/TestHelper');

function ListInfo(list) {
  if (!list.head) return null;
  let tail = list.head;
  let size = 1;
  while (tail.next) {
    tail = tail.next;
    size++;
  }
  return { head: list.head, tail, size };
}

function skip(node, index) {
  if (!node || index < 0) return null;
  let i = 0;
  while (node) {
    if (index === i) return node;
    node = node.next;
    i++;
  }
  return null;
}

function intersection(list1, list2) {
  if (!list1.head || !list2.head) return null;
  const infoA = ListInfo(list1);
  const infoB = ListInfo(list2);
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
  console.log(infoA.tail);
  console.log(infoB.tail);
  if (infoA.tail !== infoB.tail) return null;

  const long = infoA.size >= infoB.size ? infoA.head : infoB.head;
  let pointA = skip(long, Math.abs(infoA.size - infoB.size));
  let pointB = infoB.size <= infoA.size ? infoB.head : infoA.head;

  while (pointA) {
    if (pointA === pointB) return pointA;
    pointA = pointA.next;
    pointB = pointB.next;
  }
}

test('Should be return null if 2 LinkedLists do not have an intersection', () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  list1.addAll([1, 2, 3, 4, 5, 6, 7]);
  list2.addAll([8, 9, 10]);
  const result = intersection(list1, list2);
  assert(result).toBe(null);
});

test('Should return tail node if 2 LinkedLists intersect at tail', () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  list1.addAll([10, 20, 30, 40, 50, 60, 70]);
  list2.addAll([50, 60]);
  list2.tail.next = list1.tail;
  const result = intersection(list1, list2);
  assert(result).toBe(list1.tail);
});

test('Should return tail node if 2 LinkedLists share the 3rd element, then it should return it', () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  list1.addAll([10, 20, 30, 40, 50, 60, 70]);
  list2.addAll([1, 2]);
  list2.tail.next = list1.head.next.next;
  const result = intersection(list1, list2);
  assert(result).toBe(list1.head.next.next);
});
