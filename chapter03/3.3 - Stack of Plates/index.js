const { LinkedList, Node } = require('./../util/Stack');
const { test, assert } = require('../../test/TestHelper');
var Stack = require('./../util/Stack');

class SetOfStacks extends Stack {
  constructor(cap) {
    super();
    this.stacks = new Stack();
    this.cap = cap;
  }

  push(el) {
    if (!this.stacks.peak()) this.stacks.push(new Stack());
    if (this.stacks.peak().size() === this.cap) this.stacks.push(new Stack());
    this.stacks.peak().push(el);
  }

  pop() {
    if (!this.stacks.peak()) return null;
    const popped = this.stacks.peak().pop();
    if (this.stacks.peak().isEmpty()) this.stacks.pop();
    return popped;
  }

  size() {
    return this.stacks.size();
  }
}

test('Should be able be able to create a stack of stacks that can hold 3', () => {
  const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const stack = new SetOfStacks(3);
  for (int of ints) {
    stack.push(int);
  }
  assert(stack.pop()).toBe(9);
  assert(stack.pop()).toBe(8);
  assert(stack.size()).toBe(3);
  assert(stack.pop()).toBe(7);
  assert(stack.pop()).toBe(6);
  assert(stack.size()).toBe(2);
});
