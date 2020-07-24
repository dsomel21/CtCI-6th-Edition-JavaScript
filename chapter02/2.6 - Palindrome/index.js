const { LinkedList, Node } = require('./../util/LinkedListX');
const { test, assert } = require('../../test/TestHelper');

function isPalindrome(list) {
  if (!list.head) return;
  const reversed = reverse(list);
  let pointA = list.head;
  console.log(reversed.toArray());
  let pointB = reversed.head;
  while (pointA) {
    if (pointA.data !== pointB.data) return false;
    pointA = pointA.next;
    pointB = pointB.next;
  }
  return true;
}

function reverse(list) {
  if (!list.head) return;
  let rev = new LinkedList();
  let current = list.head;
  let prev = null;
  while (current) {
    let temp = new Node(current.data);
    temp.next = prev;
    prev = temp;

    if (!current.next) rev.head = temp;
    current = current.next;
  }
  return rev;
}

test('Palindrome should return true', () => {
  const list = new LinkedList();
  list.addAll([1, 3, 6, 4, 6, 3, 1]);
  const result = isPalindrome(list);
  assert(result).toBe(true);
});

test('LinkedList with only first and last values same should return false', () => {
  const list = new LinkedList();
  list.addAll([1, 6, 7, 1]);
  const result = isPalindrome(list);
  assert(result).toBe(false);
});

test('Palindrome should return true', () => {
  const list = new LinkedList();
  list.addAll(['8', '3', '6', '6', '3', '8']);
  const result = isPalindrome(list);
  assert(result).toBe(true);
});

test('Should reverse a LinkedList', () => {
  const list = new LinkedList();
  list.addAll([1, 2, 3]);
  const result = reverse(list);
  const expected = [3, 2, 1];
  assert(JSON.stringify(result.toArray())).toBe(JSON.stringify(expected));
});
