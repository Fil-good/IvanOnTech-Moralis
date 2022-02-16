

/*
An array A consisting of N different integers is given.The array contains integers in the range[1..(N + 1)], which means that exactly one element is missing.
Your goal is to find that missing element.
Write a function:
  function solution(A);
that, given an array A, returns the value of the missing element.
For example, given array A such that:
A[0] = 2
A[1] = 3
A[2] = 1
A[3] = 5
the function should return 4, as it is the missing element.
Write an efficient algorithm for the following assumptions:
N is an integer within the range[0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range[1..(N + 1)]. */

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
