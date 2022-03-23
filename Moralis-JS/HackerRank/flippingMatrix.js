
function flippingMatrix(matrix) {

  let n = matrix.length;
  let m = n / 2;
  let max = 0;
  let sum = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < m; col++) {
      max = 0;
      max = Math.max(matrix[row][col], max);
      max = Math.max(matrix[row][n - col - 1], max);
      max = Math.max(matrix[n - row - 1][col], max);
      max = Math.max(matrix[n - row - 1][n - col - 1], max);

      sum += max;

    }
  }
  return sum;

}
