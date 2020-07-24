const LinkedList = require('../util/LinkedListX');
const toArray = require('../util/printList');
const { test, assert } = require('../../test/TestHelper');

function removeMiddleNode(node) {
  let current = node;
  if (!current || !current.next || !current.next.next) return node;
  let fast = node;
  let prev = null;

  while (fast !== null) {
    if (!fast.next || !fast.next.next) {
      prev.next = current.next;
      return node;
    }
    fast = fast.next.next;
    prev = current;
    current = current.next;
  }
}

test('Should remove the n/2th element in an even LinkedList', () => {
  const list = new LinkedList();
  list.addAll([1, 2, 3, 4, 5, 6]);
  const node = list.head;
  const result = toArray(removeMiddleNode(node));
  const expected = [1, 2, 4, 5, 6];
  assert(JSON.stringify(result)).toBe(JSON.stringify(expected));
});

test('Should remove the n/2 - 1th element in an odd LinkedList', () => {
  const list = new LinkedList();
  list.addAll([1, 2, 3, 4, 5, 6]);
  const node = list.head;
  const result = toArray(removeMiddleNode(node));
  const expected = [1, 2, 4, 5, 6];
  assert(JSON.stringify(result)).toBe(JSON.stringify(expected));
});

test('Should not touch a LinkedList <= 2 items', () => {
  const list = new LinkedList();
  list.addAll(['hello', 'world']);
  const node = list.head;
  const result = toArray(removeMiddleNode(node));
  const expected = ['hello', 'world'];
  assert(JSON.stringify(result)).toBe(JSON.stringify(expected));
});
