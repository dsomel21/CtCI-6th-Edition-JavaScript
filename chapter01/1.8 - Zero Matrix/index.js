const { test, assert } = require('../../test/TestHelper');

// function zero(matrix) {
//   let flagRows = [];
//   let flagCols = [];
//   // Find 0s

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//       if (matrix[i][j] == 0) {
//         flagRows.push(i);
//         flagCols.push(j);
//       }
//     }
//   }

//   for (let i = 0; i < flagRows.length; i++) {
//     // Update all rows
//     const row = flagRows[i];
//     for (let j = 0; j < matrix[0].length; j++) {
//       matrix[row][j] = 0;
//     }

//     const col = flagCols[i];
//     for (let j = 0; j < matrix.length; j++) {
//       matrix[j][col] = 0;
//     }
//   }
//   return matrix;
// }
function zero(matrix) {
  if (matrix.length < 1 || matrix[0].length === 0) return null;

  function doesRowXHaveZero(rowIndex) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[rowIndex][j] === 0) return true;
    }
    return false;
  }

  function doesColXHaveZero(colIndex) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][colIndex] === 0) return true;
    }
    return false;
  }

  function nullifyRow(rowIndex) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[rowIndex][j] = 0;
    }
  }

  function nullifyCol(colIndex) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][colIndex] = 0;
    }
  }

  function updateMatrix() {
    const firstRowHasZero = doesRowXHaveZero(0);
    const firstColHasZero = doesColXHaveZero(0);

    for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0; // Flag the rows
          matrix[0][j] = 0; // Flag the cols
        }
      }
    }

    // HOF
    // Search in matrix.length
    for (let i = 1; i < matrix.length; i++) {
      if (matrix[i][0] === 0) nullifyRow(i);
    }

    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[0][j] === 0) nullifyCol(j);
    }

    if (firstRowHasZero) nullifyRow(0);
    if (firstColHasZero) nullifyCol(0);
    return matrix;
  }
  return updateMatrix();
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

test('Should correctly zeroify a matrix with 1 row', () => {
  const testMatrix = [[7, 3, 3, 5, 3, 1, 6, 8, -3, 4, 0, 3]];
  const result = zero(testMatrix);
  const expected = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  assert(JSON.stringify(result)).toBe(JSON.stringify(expected));
});
