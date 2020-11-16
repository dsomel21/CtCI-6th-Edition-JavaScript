const { test, assert } = require('../../test/TestHelper');

function oneAway(strA, strB) {
  if (Math.abs(strA.length - strB.length) > 1) return false;
  if (strA === strB) return true;

  const longStr = strA.length > strB.length ? strA : strB;
  const shortStr = strA.length > strB.length ? strB : strA;

  let hasDiff = false;
  let j = 0;
  for (let i = 0; i < longStr.length; i++) {
    if (longStr[i] === shortStr[j]) {
      j++;
    } else {
      if (hasDiff) return false;
      hasDiff = true;
      if (longStr.length === shortStr.length) j++;
    }
  }

  // Akaaal

  // const longStr = strA.length >= strB.length ? strA : strB;
  // const shortStr = longStr === strA ? strB : strA;
  // for (let i = 0; i < longStr.length; i++) {
  //   if (longStr[i] !== shortStr[i]) {
  //     if (longStr.length === shortStr.length) {
  //       return removeIndex(longStr, i) === removeIndex(shortStr, i);
  //     } else {
  //       return removeIndex(longStr, i) === shortStr;
  //     }
  //   }
  // }
  return true;
}

function removeIndex(str, index) {
  return str.substring(0, index) + str.substring(index + 1);
}

// oneAway('pale', 'bale');

test('Same letters but one less should be true', () => {
  const result = oneAway('pale', 'ple');
  const expected = true;
  assert(result).toBe(expected);
});
test('Another one with same letters but one less should be true', () => {
  const result = oneAway('pales', 'pale');
  const expected = true;
  assert(result).toBe(expected);
});
test('Third with same letters but one less should be true', () => {
  const result = oneAway('lemonade', 'bemonade');
  const expected = true;
  assert(result).toBe(expected);
});
test('First letter off, but same length sohuld be true', () => {
  const result = oneAway('pale', 'bale');
  const expected = true;
  assert(result).toBe(expected);
});
test('Same length, but 2 letters off should be false', () => {
  const result = oneAway('pale', 'bake');
  const expected = false;
  assert(result).toBe(expected);
});

test('Length difference of more than 2 should be false', () => {
  const result = oneAway('apple', 'applets');
  const expected = false;
  assert(result).toBe(expected);
});

test('2 letter string and its reversal should be false?', () => {
  const result = oneAway('xo', 'ox');
  const expected = false;
  assert(result).toBe(expected);
});
