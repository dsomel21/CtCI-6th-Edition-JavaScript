var checkPermute = function (stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
    // else sort and compare
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    var sortedStringOne = stringOne.split('').sort().join('');
    var sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
  }
};

// Tests
test('', () => {
  const result = checkPermute('aba');
  const expected = 'aab';
  assert(result).toBe(expected);
});

test('', () => {
  const result = checkPermute('aba');
  const expected = 'aaba';
  assert(result).toBe(expected);
});

test('', () => {
  const result = checkPermute('aba');
  const expected = 'aa';
  assert(result).toBe(expected);
});
