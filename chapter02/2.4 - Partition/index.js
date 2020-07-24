const { LinkedList, Node } = require('../util/LinkedListX');
const { test, assert } = require('../../test/TestHelper');

// function partition(list, partition) {
//   let node = list.head;
//   if (!node) return;
//   let beforeList = new LinkedList();
//   let afterList = new LinkedList();
//   while (node) {
//     node.data < partition
//       ? beforeList.add(node.data)
//       : afterList.add(node.data);
//     node = node.next;
//   }
//   if (beforeList.head) {
//     beforeList.tail.next = afterList.head;
//     return beforeList;
//   }
//   return afterList;
// }

function partition(list, x) {
  let node = list.head;
  if (!node) return;
  let beforeList = new LinkedList();
  let beforeTail = null;
  let afterList = new LinkedList();
  let afterTail = null;

  while (node) {
    if (node.data < x) {
      if (beforeTail) {
        beforeTail.next = node;
        beforeTail = node;
      } else {
        const head = new Node(node.data);
        beforeList.head = head;
        beforeTail = head;
      }
    } else {
      if (afterTail) {
        afterTail.next = node;
        afterTail = node;
      } else {
        const head = new Node(node.data);
        afterList.head = head;
        afterTail = head;
      }
    }
    node = node.next;
  }

  if (beforeTail) beforeTail.next = null;
  if (afterTail) afterTail.next = null;
  if (beforeTail) {
    if (afterTail) {
      beforeTail.next = afterList.head;
    }
    return beforeList;
  }
  return afterList;
}

test('Should partition an average number properly', () => {
  const list = new LinkedList();

  list.addAll([3, 5, 8, 5, 10, 2, 1]);
  const result = partition(list, 5);
  const expected = [3, 2, 1, 5, 5, 8, 10];
  console.log(result);
  console.log('==================================');
  console.log(result.toArray());
  // assert(JSON.stringify(result.toArray())).toBe(JSON.stringify(expected));
});

test('Should return same List if the number is the highest one in the list', () => {
  const list = new LinkedList();

  list.addAll([5, 1, 9, 7, 4, 6, 3, 7, 4, 2]);
  const result = partition(list, 10);
  const expected = [5, 1, 9, 7, 4, 6, 3, 7, 4, 2];
  assert(JSON.stringify(result.toArray())).toBe(JSON.stringify(expected));
});

test('Should return same List if the number is the lowest one in the list', () => {
  const list = new LinkedList();

  list.addAll([10, 16, 30, 53, 76, 21, 95]);
  const result = partition(list, 1);
  const expected = [10, 16, 30, 53, 76, 21, 95];
  assert(JSON.stringify(result.toArray())).toBe(JSON.stringify(expected));
});
