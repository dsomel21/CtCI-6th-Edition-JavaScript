const { test, assert } = require('../../test/TestHelper');

function palinPerm(str) {
  if (!str || str.length === 0) return null;

  const charHash = {};

  for (let char of str.toLowerCase().replace(' ', '')) {
    charHash[char] ? charHash[char]++ : (charHash[char] = 1);
  }

let hasOdd = false;
  for (let char in charHash) {
    if (charHash[char] % 2 === 1) {
      if (hasOdd) return false;
      hasOdd = true;
    }
  }
  return true;
}

// TESTS
test('Literally a palindrome should return true', () => {
  const result = palinPerm('racecar');
  const expected = true;
  assert(result).toBe(expected);
});

test('Known palindrome should return true', () => {
  const result = palinPerm('Tact Coa');
  const expected = true;
  assert(result).toBe(expected);
});

test('FAKE palindrome should return false', () => {
  const result = palinPerm('Tact boa');
  const expected = false;
  assert(result).toBe(expected);
});

test('String with ZERO odd occurence of character should return true', () => {
  const result = palinPerm('qt qt');
  const expected = true;
  assert(result).toBe(expected);
});

test('String with 1 odd occurence of character should return true', () => {
  const result = palinPerm('aabbb');
  const expected = true;
  assert(result).toBe(expected);
});

test('String with 2 odd occurence of character should return false', () => {
  const result = palinPerm('xxyyyz');
  const expected = false;
  assert(result).toBe(expected);
});

test('String with more than 1 odd occurence of character should return false', () => {
  const result = palinPerm('mmm www ooo');
  const expected = false;
  assert(result).toBe(expected);
});
