
// the full problem solution takes into account the sum of the previous result and the current element
// the method of reduce is very usefull to solve this problem

// de somformule van Gauss: som [1..n] = n(n+1)/2

function solution(A) {
  let lastNumber = A.length + 1;
  let calculated_sum = lastNumber * (lastNumber + 1) / 2;
  const reducer = (previous_value, current_value) => previous_value + current_value;
  let array_sum = A.reduce(reducer);
  let res = calculated_sum - array_sum;
  return res;
}




// this solution takes a lot of computing power
/*
function solution(A) {

  let sortedA = A.sort();


  for (i = 0; i < sortedA.length; i += 1) {
    if (sortedA[i] !== i + 1) {
      return sortedA[i] - 1;
    }
  }
}
*/
