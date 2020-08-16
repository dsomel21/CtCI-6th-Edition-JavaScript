class Stack {
  constructor() {
    this.items = [];
  }

  push(el) {
    this.items.push(el);
  }

  pop() {
    return this.items.pop();
  }

  peak() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    return (this.item = []);
  }

  size() {
    return this.items.length;
  }

  _toArray() {
    return this.items;
  }
}

module.exports = Stack;

// // simple implementation of a stack
// // using an Array

// /*
// Interface:
// - push(value)
// - pop()
// - peek()
// - isEmpty()
// - size()
// */
// class Stack {
//   constructor() {
//     this._data = [];
//   }

//   size() {
//     return this._data.length;
//   }

//   isEmpty() {
//     return this.size() == 0;
//   }

//   push(value) {
//     this._data.push(value);
//   }

//   pop() {
//     return this._data.pop();
//   }

//   peek() {
//     if (this.isEmpty()) return null;
//     return this._data[this.size() - 1];
//   }

//   _toArray() {
//     return this._data;
//   }
// }

// module.exports = Stack;

// /* TEST */

// // var s = new Stack();
// // s.push('a');
// // s.push('b');
// // s.push('c');
// // console.log(s.pop(), 'c');
// // console.log(s.peek(), 'b');
// // console.log(s.pop(), 'b');
// // console.log(s.pop(), 'a');
// // console.log(s.isEmpty(), true);
