
function countingSort(arr) {
  let n = arr.length;
  let countingArray = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let index_to_change = arr[i];
    countingArray[index_to_change] += 1;
  }

  return countingArray;

}
