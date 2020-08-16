// implement a queue using linkedLists
var LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(el) {
    Array.isArray(el) ? this.items.push(...el) : this.items.push(el);
  }
  dequeue() {
    return this.items.shift();
  }
  peak() {
    return this.items[0] || null;
  }
  isEmpty() {
    return this.items.length === 0;
  }

  _toArray() {
    return this.items;
  }
}
// class Queue {
//   constructor() {
//     this._list = new LinkedList();
//   }

//   enqueue(value) {
//     this._list.append(value);
//   }

//   dequeue() {
//     let node = this._list.popFirst();
//     return node.value;
//   }

//   peek() {
//     return this._list.head ? this._list.head.value : null;
//   }

//   isEmpty() {
//     return this._list.head == null;
//   }

//   _toArray() {
//     return this._list._toArray();
//   }
// }

// // alias
// Queue.prototype.add = Queue.prototype.enqueue;
// Queue.prototype.remove = Queue.prototype.dequeue;

module.exports = Queue;

/* TEST */
// var q = new Queue();
// q.add('a');
// q.add('b');
// q.add('c');
// console.log(q._toArray());
// console.log(q.remove(), 'a');
// console.log(q.peek(), 'b');
// console.log(q.remove(), 'b');
// console.log(q.remove(), 'c');
// console.log(q.isEmpty(), true);
// console.log(q._toArray());
