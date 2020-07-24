const { LinkedList, Node } = require('../util/LinkedListX');
const { test, assert } = require('../../test/TestHelper');

function sumList(headA, headB) {
  if (!headA || !headB) return;
  let sum = new LinkedList();
  let carry = 0;
  while (headA || headB) {
    let headAVal = headA ? headA.data : 0;
    let headBVal = headB ? headB.data : 0;
    let total = headAVal + headBVal + carry;
    let rem = total % 10;
    carry = Math.floor(total / 10);
    sum.add(rem);

    if (headA) headA = headA.next;
    if (headB) headB = headB.next;
  }
  if (carry > 0) sum.add(carry);
  return sum;
}

test('Should be able to two 3-digit numbers', () => {
  const list1 = new LinkedList();
  list1.addAll([7, 1, 6]);
  const list2 = new LinkedList();
  list2.addAll([5, 9, 2]);
  const result = sumList(list1.head, list2.head);
  const expected = [2, 1, 9];
  assert(JSON.stringify(result.toArray())).toBe(JSON.stringify(expected));
});

test('Should be able to two 3-digit numbers with a 4 digit sum', () => {
  const list1 = new LinkedList();
  list1.addAll([9, 8, 6]);
  const list2 = new LinkedList();
  list2.addAll([3, 0, 4]);
  const result = sumList(list1.head, list2.head);
  const expected = [2, 9, 0, 1];
  assert(JSON.stringify(result.toArray())).toBe(JSON.stringify(expected));
});

test('Should be able to a 2 digit 4-digit numbers with a 4 digit sum', () => {
  const list1 = new LinkedList();
  list1.addAll([1, 1]);
  const list2 = new LinkedList();
  list2.addAll([5, 6, 7, 8]);
  const result = sumList(list1.head, list2.head);
  const expected = [6, 7, 7, 8];
  assert(JSON.stringify(result.toArray())).toBe(JSON.stringify(expected));
});

// test('Should be able to two 3-digit numbers', () => {
//   const list1 = new LinkedList.addAll([6, 1, ]);
//   const list2 = new LinkedList.addAll([5, 9, 2]);
//   const result = sumList(list1, list2);
//   const expected = [2, 1, 9];
//   assert(JSON.stringify(result.toArray()).toBe(JSON.stringify(expected)));
// });
