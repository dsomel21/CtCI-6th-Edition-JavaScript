const { test, assert } = require('../../test/TestHelper');

function getCharFrequency(str) {
  let arr = [];
  for (let char of str) {
    arr[char] ? arr[char]++ : (arr[char] = 1);
  }
  return arr;
}

function hasSameCharFrequency(strA, strB) {
  const arrA = getCharFrequency(strA);
  const arrB = getCharFrequency(strB);
  for (let key in arrA) {
    if (arrA[key] !== arrB[key]) return false;
  }
  return true;
}
// function rotate(strA, strB) {
//   if (strA.length !== strB.length) return false;
//   if (!hasSameCharFrequency(strA, strB)) return false;

//   const arrB = Array.from(strB);
//   const firstAChar = strA[0];

//   for (let i = 0; i < strA.length; i++) {
//     if (firstAChar === arrB[0]) {
//       if (strA === arrB.join('')) return true;
//     }
//     const firstBChar = arrB.shift();
//     arrB.push(firstBChar);
//   }
//   return false;
// }

function rotate(strA, strB) {
  if (strA.length === 0 || strA.length !== strB.length) return false;
  const doubledStrA = strA + strA;
  return doubledStrA.includes(strB);
}

test('CTCI Rotated string should return true', () => {
  const result = rotate('erbottlewat', 'waterbottle');
  assert(result).toBe(true);
});

test('Rotated string should return true', () => {
  const result = rotate('ABRACADABRA', 'ABRAABRACAD');
  assert(result).toBe(true);
});

test('Another rotated string should return true', () => {
  const result = rotate('ssaaasss', 'sssssaaa');
  assert(result).toBe(true);
});

test('Reversed non-palindrome string should return false', () => {
  const result = rotate('pizzazz', 'zzazzip');
  assert(result).toBe(false);
});

test('String with different length should be false', () => {
  const result = rotate('claymore', 'moreclays');
  assert(result).toBe(false);
});

test('String with same characters but different frequency should be false', () => {
  const result = rotate('bobby', 'yboob');
  assert(result).toBe(false);
});
