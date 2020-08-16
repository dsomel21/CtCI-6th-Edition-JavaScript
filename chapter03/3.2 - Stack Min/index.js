const { LinkedList, Node } = require('./../util/Stack');
const { test, assert } = require('../../test/TestHelper');
var Stack = require('./../util/Stack');

class MinStack extends Stack {
  constructor() {
    super();
  }

  push(el) {
    this.items.push({
      value: el,
      min: Math.min(this.min() || Infinity, el),
    });
  }

  peak() {
    return this.isEmpty() ? null : this.items[this.size() - 1];
  }

  min() {
    return this.isEmpty() ? null : this.peak().min;
  }
}

test('Should be able to get the minimum when only pushing', () => {
  const ints = [15, 4, 7, 20, 2, 12, 18, 8, 13, 4];
  const stack = new MinStack();
  for (int of ints) {
    stack.push(int);
  }
  assert(stack.min()).toBe(2);
});

test('Should be able to get the minimum even when max element is popped', () => {
  const ints = [10, 10, 20, 30, 50, 8, 13, 8, 1];
  const stack = new MinStack();
  for (int of ints) {
    stack.push(int);
  }
  stack.pop(); // 5
  stack.pop(); // 8
  stack.pop(); // 13
  console.log(JSON.stringify(stack));

  assert(stack.min()).toBe(8);
});

test('Should return null if thehre is nothing in the stack', () => {
  const stack = new MinStack();
  stack.push(13);
  stack.pop(); // 13
  assert(stack.min()).toBe(null);
});
