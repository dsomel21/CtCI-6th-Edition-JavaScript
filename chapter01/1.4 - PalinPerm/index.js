const { test, assert } = require('../../test/TestHelper');

function createDowncaseCharHash(str) {
  if (str.length < 0) return;
  let charHash = {};
  for (let char of str) {
    char = char.toLowerCase();
    charHash[char] ? charHash[char]++ : (charHash[char] = 1);
  }
  return charHash;
}

function palinPerm(str) {
  const strHash = createDowncaseCharHash(str);
  let oddCount = 0;
  for (let char in strHash) {
    if (char === ' ') continue;
    if (strHash[char] % 2 === 1) {
      oddCount++;
      if (oddCount > 1) return false;
    }
  }
  return true;
}

// TESTS
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
