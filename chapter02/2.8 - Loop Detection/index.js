const { LinkedList, Node } = require('./../util/LinkedListX');
const { test, assert } = require('../../test/TestHelper');

// function loopDetection(list) {
//   if (!list.head) return null;
//   let nodeSet = new Set();
//   let current = list.head;
//   while (current) {
//     if (nodeSet.has(current)) {
//       return current;
//     } else {
//       nodeSet.add(current);
//     }
//     current = current.next;
//   }
//   return null;
// }

function loopDetection(list) {
  if (!list.head) return null;
  let slow = list.head;
  let fast = list.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return getLoopHead(list, fast);
  }
  return null;
}

// @params: { list: LinkedList, pointB: Node }
function getLoopHead(list, pointB) {
  let pointA = list.head;
  while (pointA !== pointB) {
    pointA = pointA.next;
    pointB = pointB.next;
  }
  return pointA;
}

test('Should return 2nd element in LinkedList if it has 2 pointees', () => {
  const list = new LinkedList();
  list.addAll([1, 2, 3, 4, 5, 6, 7]);
  list.tail.next = list.head.next;
  const result = loopDetection(list);
  assert(result).toBe(list.head.next);
});

test('Should return middle element in LinkedList if it has 2 pointees', () => {
  const list = new LinkedList();
  list.addAll(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  list.tail.next = list.get(4);
  const result = loopDetection(list);
  assert(result).toBe(list.get(4));
});

test('Should return null if LinkedList is valid', () => {
  const list = new LinkedList();
  list.addAll([1, 1, 2, 3, 5, 8, 13, 21]);
  const result = loopDetection(list);
  assert(result).toBe(null);
});
