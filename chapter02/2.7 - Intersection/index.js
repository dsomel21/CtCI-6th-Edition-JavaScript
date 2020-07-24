const { LinkedList, Node } = require('./../util/LinkedListX');
const { test, assert } = require('../../test/TestHelper');

function intersection(list1, list2) {
  return null;
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

test('Should return tail node if 2 LinkedLists intersect at tail', () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  list1.addAll([10, 20, 30, 40, 50, 60, 70]);
  list2.addAll([50, 60]);
  list2.tail.next = list1.tail;
  const result = intersection(list1, list2);
  assert(result).toBe(list1.tail);
});
