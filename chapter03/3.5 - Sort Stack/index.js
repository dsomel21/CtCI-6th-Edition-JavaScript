const { LinkedList, Node } = require('./../util/Stack');
const { test, assert } = require('../../test/TestHelper');
var Stack = require('./../util/Stack');

function sortStack(stack) {
  if (stack.isEmpty()) return null;
  const sorted = new Stack();
  sorted.push(stack.pop());

  while (!stack.isEmpty()) {
    if (stack.peak() <= sorted.peak()) {
      sorted.push(stack.pop());
    } else {
      let temp = stack.pop();
      stack.push(sorted.pop());
      while (!sorted.isEmpty() || temp <= sorted.peak()) {
        stack.push(sorted.pop());
      }
      sorted.push(temp);
    }
  }
  return sorted;
}

function reverseArray(arr) {
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    reversed.push(arr[arr.length - 1 - i]);
  }
  return reversed;
}

test('Should be able to sort a Stack', () => {
  const ints = [13, 22, 5, 8, 2, 26, 72, 23, 42];
  const stack = new Stack();
  for (int of ints) {
    stack.push(int);
  }
  let result = sortStack(stack);
  result = reverseArray(result._toArray());
  const expected = [2, 5, 8, 13, 22, 23, 26, 42, 72];
  assert(JSON.stringify(result)).toBe(JSON.stringify(expected));
});

test('Should be able to sort a Stack even when items are popped', () => {
  const stack = new Stack();
  const ints1 = [37, 50, 27, 3, 45, 58];
  for (int of ints1) {
    stack.push(int);
  }
  stack.pop(); // 58 removed
  stack.pop(); // 45 removed
  const ints2 = [52, 18, 89, 67];
  for (int of ints2) {
    stack.push(int);
  }
  let result = sortStack(stack);
  result = reverseArray(result._toArray());
  const expected = [3, 18, 27, 37, 50, 52, 67, 89];
  assert(JSON.stringify(result)).toBe(JSON.stringify(expected));
});

test('Should a return a sorted array if already in order', () => {
  const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const stack = new Stack();
  for (int of ints) {
    stack.push(int);
  }

  let result = sortStack(stack);
  result = reverseArray(result._toArray());
  const expected = [...ints];
  assert(JSON.stringify(result)).toBe(JSON.stringify(expected));
});
