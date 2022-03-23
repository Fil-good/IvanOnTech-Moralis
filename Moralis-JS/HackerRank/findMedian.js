function findMedian(arr) {
  // Write your code here
  // edge case 1
  let Arr = new Uint8Array(arr);
  let l = Arr.length;

  let sortedArr = Arr.sort();

  let middle_index = Math.floor(l / 2);// 7/2 = 3.5 floor => 3 = index of middle element

  return sortedArr[middle_index];

}
