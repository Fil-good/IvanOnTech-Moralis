
// this is a simplified version as it only solves the problem if the array starts with 1
// the full problem solution takes into account the sum of the previous result and the current element
// the method of reduce is very usefull to solve this problem

function solution(A) {

  let sortedA = A.sort();


  for (i = 0; i < sortedA.length; i += 1) {
    if (sortedA[i] !== i + 1) {
      return sortedA[i] - 1;
    }
  }
}
