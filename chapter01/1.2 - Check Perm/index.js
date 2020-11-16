const { test, assert } = require('../../test/TestHelper');

// Brute Force
// var checkPermute = function (strA, strB) {
//   if (!strA || !strB) return true;
//   if (strA.length !== strB.length) return false;

//   let arrB = Array.from(strB);
//   for (let i = 0; i < strA.length; i++) {
//     let seen = false;
//     for (let j = 0; j < strB.length; j++) {
//       if (strA[i] === arrB[j]) {
//         arrB[j] = null;
//         seen = true;
//         break;
//       }
//     }
//     if (!seen) return false;
//   }
//   return true;
// };

function checkPermute(strA, strB) {
  if (!strA || !strB) return null;
  if (strA.length !== strB.length) return false;
  let hashA = {};
  let hashB = {};
  for (let char of strA) {
    hashA[char] ? hashA[char]++ : (hashA[char] = 1);
  }

  for (let char of strB) {
    if (!hashA[char]) return false;
    if (hashB[char] >= hashA[char]) return false;
    hashB[char] ? hashB[char]++ : (hashB[char] = 1);
  }

  return true;
}

// Tests
test('Strings with same occurence of characters should be true', () => {
  const result = checkPermute('aba', 'aab');
  const expected = true;
  assert(result).toBe(expected);
});

test('Strings of different lengths (x + 1) should be false', () => {
  const result = checkPermute('aba', 'aaba');
  const expected = false;
  assert(result).toBe(expected);
});

test('Strings of different lengths (x - 1) should be false', () => {
  const result = checkPermute('aba', 'aa');
  const expected = false;
  assert(result).toBe(expected);
});

test('String with same characters but different frequencies should be false', () => {
  const result = checkPermute('racecar', 'racecaa');
  const expected = false;
  assert(result).toBe(expected);
});
