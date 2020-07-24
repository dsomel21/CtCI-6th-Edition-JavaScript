const { test, assert } = require('../../test/TestHelper');

// Brute Force Approach
// function rotate(matrix) {
//   if (matrix.length < 2) return matrix;
//   let newMatrix = [...new Array(matrix.length)].map(
//     (r) => (r = new Array(matrix.length))
//   );
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//       newMatrix[i][j] = matrix[matrix.length - 1 - j][i];
//     }
//   }
//   return newMatrix;
// }

function rotate(matrix) {
  if (matrix.length < 2 || matrix[0].length !== matrix.length) return matrix;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // Horizontally reflect each row
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - 1 - j];
      matrix[i][matrix.length - 1 - j] = temp;
    }
  }
  return matrix;
}

test('Should be able to rotate a matrix 90 degrees clockwise', () => {
  const matrix = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [5, 6, 7, 8],
    [50, 60, 70, 80],
  ];

  const expectedMatrix = [
    [50, 5, 10, 1],
    [60, 6, 20, 2],
    [70, 7, 30, 3],
    [80, 8, 40, 4],
  ];
  const result = rotate(matrix);
  assert(JSON.stringify(result)).toBe(JSON.stringify(expectedMatrix));
});

test('Should be able to rotate a matrix 90 degrees clockwise', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const expectedMatrix = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ];
  const result = rotate(matrix);
  assert(JSON.stringify(result)).toBe(JSON.stringify(expectedMatrix));
});

test('1x1 matrix should be the same', () => {
  const matrix = [1];

  const expectedMatrix = [1];
  const result = rotate(matrix);
  assert(JSON.stringify(matrix)).toBe(JSON.stringify(expectedMatrix));
});

test('Matrix that is no NxN should not mutate', () => {
  const badMatrix = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
  ];

  const result = rotate(badMatrix);
  assert(JSON.stringify(badMatrix)).toBe(JSON.stringify(badMatrix));
});
