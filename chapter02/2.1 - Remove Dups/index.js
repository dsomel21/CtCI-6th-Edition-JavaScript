const { test, assert } = require('../../test/TestHelper');
// const LinkedList = require('../util/LinkedListX');

// // function removeDuplicates(list) {
// //   let node = list.head;
// //   if (!node) return list;
// //   let set = new Set([node.value]);

// //   while (node.next) {
// //     if (set.has(node.next.value)) {
// //       node.next = node.next.next;
// //     } else {
// //       set.add(node.next.value);
// //       node = node.next;
// //     }
// //   }
// //   return list;
// // }

// function removeDuplicates(list) {
//   let current = list.head;
//   if (!current) return list;

//   while (current) {
//     let runner = current;
//     while (runner.next) {
//       if (runner.next.value === current.value) {
//         runner.next = runner.next.next;
//       } else {
//         runner = runner.next;
//       }
//     }
//     current = current.next;
//   }
//   return list;
// }

// test('Should remove duplicate nodes in LinkedList', () => {
//   let list = new LinkedList();
//   for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
//     list.append(elem);
//   }

//   const result = removeDuplicates(list);
//   const expected = [1, 5, 6, 8];
//   assert(JSON.stringify(result._toArray())).toBe(JSON.stringify(expected));
// });

// test('Should remove duplicate nodes in LinkedList of size 2', () => {
//   let list = new LinkedList();
//   for (let elem of ['hey', 'hey']) {
//     list.append(elem);
//   }

//   const result = removeDuplicates(list);
//   const expected = ['hey'];
//   assert(JSON.stringify(result._toArray())).toBe(JSON.stringify(expected));
// });

// test('Should return same value is no duplicate nodes in LinkedList', () => {
//   let list = new LinkedList();
//   for (let elem of ['i', 'miss', 'the', 'old', 'kanye']) {
//     list.append(elem);
//   }

//   const result = removeDuplicates(list);
//   const expected = ['i', 'miss', 'the', 'old', 'kanye'];
//   assert(JSON.stringify(result._toArray())).toBe(JSON.stringify(expected));
// });

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Creates node and appends element to tail
  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  addAll(array) {
    if (!array.length) return;
    for (let d of array) {
      this.add(d);
    }
  }

  toArray() {
    let node = this.head;
    if (!this.head) return [];
    const nodes = [];
    while (node) {
      nodes.push(node.data);
      node = node.next;
    }
    return nodes;
  }

  get(index) {
    let node = this.head;
    if (!node) return;
    let i = 0;
    while (i < index) {
      i++;
      node = node.next;
      if (node === null) return null;
      // if (node === null) throw new Error('LinkedList Out of Bounds');
    }
    return node;
  }

  numElementsAfterK(k) {
    if (parseInt(k) < 0) return;
    let node = this.get(k);
    let i = 0;
    if (!node) return;
    while (node.next) {
      i++;
      node = node.next;
    }
    return i;
  }
}

test('Should be able to add array of values', () => {
  const link = new LinkedList();
  const intArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const result = link.addAll(intArray);
  assert(JSON.stringify(link.toArray())).toBe(JSON.stringify(intArray));
});

test('Should be able to get a specific element in LinkedList', () => {
  const link = new LinkedList();
  const intArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  link.addAll(intArray);
  const result = link.get(0);
  assert(result.data).toBe(0);
});

test('Should be able to get a last element in LinkedList', () => {
  const link = new LinkedList();
  const intArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 21];
  link.addAll(intArray);
  const result = link.get(10);
  assert(result.data).toBe(21);
});

test('Should be able to get number of elements AFTER k', () => {
  const link = new LinkedList();
  link.addAll(['hi', 'my', 'name', 'is', 'huh']);
  const result = link.numElementsAfterK(3);
  assert(result).toBe(1);
});

test('Number of elements AFTER the last, should be 0', () => {
  const link = new LinkedList();
  link.addAll(['hi', 'my', 'name', 'is', 'huh']);
  const result = link.numElementsAfterK(4);
  assert(result).toBe(0);
});

test('Number of elements AFTER out of bounds last, should not be "undefined..." i guess', () => {
  const link = new LinkedList();
  link.addAll([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const result = link.numElementsAfterK(11);
  assert(result).toBe(undefined);
});

// WE SHOULD CREATE A THROW ERROR ASSERTION
// test('Should NOT be able to get an element out of bounds in a LinkedList', () => {
//   const link = new LinkedList();
//   const intArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 21];
//   link.addAll(intArray);
//  assert(link.get(11)).toThrowError();
// });
