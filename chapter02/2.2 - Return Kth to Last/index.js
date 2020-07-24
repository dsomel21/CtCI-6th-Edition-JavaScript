const { test, assert } = require('../../test/TestHelper');
const LinkedList = require('../util/LinkedListX');

function kthToLast(list, k) {}

test('Should remove duplicate nodes in LinkedList', () => {
  let list = new LinkedList();
  for (let elem of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    list.append(elem);
  }

  const result = kthToLast(list, 6);
  const expected = [1, 5, 6, 8];
  assert(JSON.stringify(result._toArray())).toBe(JSON.stringify(expected));
});
