
function countingSort(arr) {
  let n = arr.length;

  // you always need to return an array of 100 elements, see task instructions
  let countingArray = new Array(100).fill(0);

  for (let i = 0; i < n; i++) {
    let index_to_change = arr[i];
    countingArray[index_to_change] += 1;
  }

  return countingArray;

}
