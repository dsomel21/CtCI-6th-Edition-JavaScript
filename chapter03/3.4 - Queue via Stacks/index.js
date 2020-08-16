const { LinkedList, Node } = require('./../util/Stack');
const { test, assert } = require('../../test/TestHelper');
var Stack = require('./../util/Stack');

class MyQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(el) {
    this.s1.push(el);
    this.s2.clear();
  }

  dequeue() {
    if (this.s1.isEmpty() && this.s2.isEmpty()) return null;
    if (this.s2.isEmpty()) this.fillS2();
    return this.s2.pop();
  }

  fillS2() {
    while (this.s1.peak()) this.s2.push(this.s1.pop());
  }

  peak() {
    if (this.s1.isEmpty() && this.s2.isEmpty()) return null;
    if (this.s2.isEmpty()) this.fillS2();
    return this.s2.peak();
  }
}

test('Should be able to dequeue', () => {
  const q = new MyQueue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  const result = q.dequeue();
  assert(result).toBe(1);
});

test('Should be enqueue', () => {
  const q = new MyQueue();
  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);
  assert(q.peak()).toBe(10);
});
