const { test, assert } = require('../../test/TestHelper');

// Write your code here...
function isUnique(str) {
  if (str.length < 2) return true;
  const sortedCharCodes = mergesort(getCharCodes(str));
  console.log('getCharCodes(str)', getCharCodes(str));
  console.log('sortedCharCodes', sortedCharCodes);
  for (let i = 1; i <= sortedCharCodes.length; i++) {
    if (sortedCharCodes[i] === sortedCharCodes[i - 1]) return false;
  }
  return true;
}

function getCharCodes(str) {
  let charCodes = [];
  for (let i = 0; i < str.length; i++) {
    charCodes.push(str.charCodeAt(i));
  }
  return charCodes;
}

function mergesort(arr) {
  if (arr.length < 2) return arr;
  let left = arr.slice(0, arr.length / 2);
  let right = arr.slice(arr.length / 2);
  left = mergesort(left);
  right = mergesort(right);

  let i = 0,
    j = 0,
    k = 0;
  let sorted = [];

  while (sorted.length < arr.length) {
    if (left[i] <= right[j] || j >= right.length) {
      sorted[k] = left[i];
      i++;
    } else if (right[j] <= left[i] || i >= left.length) {
      sorted[k] = right[j];
      j++;
    }
    k++;
  }
  return sorted;
}

/* TESTS */
test('All unique characters should be true', () => {
  const result = isUnique('abcd');
  const expected = true;
  assert(result).toBe(expected);
});

test('Duplicate character should be false', () => {
  const result = isUnique('abccd');
  const expected = false;
  assert(result).toBe(expected);
});

test('Multiple duplicate characters should be false', () => {
  const result = isUnique('bhjjb');
  const expected = false;
  assert(result).toBe(expected);
});

test('All unique characters should be true', () => {
  const result = isUnique('mdjq');
  const expected = true;
  assert(result).toBe(expected);
});

test('When first and last character are the same, should be false', () => {
  const result = isUnique('bob');
  const expected = false;
  assert(result).toBe(expected);
});

test('Single character should be true', () => {
  const result = isUnique('a');
  const expected = true;
  assert(result).toBe(expected);
});
