const { test, assert } = require('../../test/TestHelper.js');

// function compress(str) {
//   if (str.length <= 3) return str;
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     let occurance = 1;
//     while (str[i] === str[i + 1]) {
//       occurance++;
//       i++;
//     }
//     newStr += str[i] + occurance;
//   }
//   return newStr.length < str.length ? newStr : str;
// }

function compress(str) {
  if (str.length <= getCompressionLength(str)) return str;

  let newStr = '';
  let occurance = 0;
  for (let i = 0; i < str.length; i++) {
    occurance++;
    if (i === str.length - 1 || str[i] !== str[i + 1]) {
      newStr += `${str[i]}${occurance}`;
      occurance = 0;
    }
  }
  return newStr;
}

function getCompressionLength(str) {
  let occurance = 0;
  let compressionLength = 0;
  for (let i = 0; i < str.length; i++) {
    occurance++;
    if (i === str.length - 1 || str[i] !== str[i + 1]) {
      compressionLength += 1 + occurance.toString().length;
      occurance = 0;
    }
  }
  return compressionLength;
}

/* TEST */
test('2 letter string should return back same string', () => {
  const result = compress('xx');
  const expected = 'xx';
  assert(result).toBe(expected);
});

test('3 unique letter word should return back same string', () => {
  const result = compress('abc');
  const expected = 'abc';
  assert(result).toBe(expected);
});

test('abcaaaaa should return back the same string', () => {
  const result = compress('abcaaaaa');
  const expected = 'abcaaaaa';
  assert(result).toBe(expected);
});

test('abcAAAAAA should return back compressed string', () => {
  const result = compress('abcAAAAAA');
  const expected = 'a1b1c1A6';
  assert(result).toBe(expected);
});
