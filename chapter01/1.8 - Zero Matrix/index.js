const { test, assert } = require('../../test/TestHelper');

function zero(matrix) {
  let flagRows = [];
  let flagCols = [];
  // Find 0s

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] == 0) {
        flagRows.push(i);
        flagCols.push(j);
      }
    }
  }

  for (let i = 0; i < flagRows.length; i++) {
    // Update all rows
    const row = flagRows[i];
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[row][j] = 0;
    }

    const col = flagCols[i];
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][col] = 0;
    }
  }
  return matrix;
}

test('Should correctcly zeroify a matrix', () => {
  var testMatrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];
  const result = zero(testMatrix);
  const expected = [
    [1, 0, 1, 1],
    [1, 0, 1, 1],
    [0, 0, 0, 0],
    [1, 0, 1, 1],
    [1, 0, 1, 1],
    [1, 0, 1, 1],
  ];
  assert(JSON.stringify(result)).toBe(JSON.stringify(expected));
});

test('Should correctcly zeroify a matrix with 2 zeroes', () => {
  const testMatrix = [
    [0, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [1, 2, 3, 0, 5],
    [6, 7, 8, 9, 2],
  ];
  const result = zero(testMatrix);
  const expected = [
    [0, 0, 0, 0, 0],
    [0, 7, 8, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 7, 8, 0, 2],
  ];

  assert(JSON.stringify(result)).toBe(JSON.stringify(expected));
});
