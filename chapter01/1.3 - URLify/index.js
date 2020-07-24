const { test, assert } = require('../../test/TestHelper');

var urlify = function (str, length) {
  let trimmed = str.trim();
  let url = [];

  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === ' ') {
      while (trimmed[i + 1] === ' ') {
        i++;
      }
      url.push('%20');
    } else {
      url.push(trimmed[i]);
    }
  }
  return url.join('');
};

test('Should replace relevant spaces with %20', () => {
  const result = urlify('Mr John Smith    ', 13);
  const expected = 'Mr%20John%20Smith';
  assert(result).toBe(expected);
});
