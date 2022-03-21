function diagonalDifference(arr) {
  // Write your code here
  let sum_backslash = 0;
  let sum_forwardslash = 0;
  let n = arr[0].length;

  for (let i = 0; i < n; i++) {
    sum_backslash += arr[i][i];
  }

  for (let i = n - 1; i >= 0; i--) {
    let arr_rows = arr[i];
    let arr_rows_reversed = arr_rows.reverse();
    sum_forwardslash += arr_rows_reversed[i];

  }


  return Math.abs(sum_backslash - sum_forwardslash);


}
