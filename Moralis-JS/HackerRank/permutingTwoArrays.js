
function twoArrays(k, A, B) {
  // there is a problem with the sort function in js, doesn't sort properly 1 11 12 2 21!!!!

  let aInt = new Uint8Array(A).sort();
  let bInt = new Uint8Array(B).sort().reverse();
  let n = bInt.length;
  let res = '';
  for (let i = 0; i < n; i++) {
    if (aInt[i] + bInt[i] >= k) {
      res = 'YES';
    } else {
      res = 'NO';
      break;
    }
  }
  return res;
}

/*
There are two - element arrays of integers, and.Permute them into some  and  such that the relation  holds for all  where.
There will be  queries consisting of, , and.For each query, return YES if some permutation, satisfying the relation exists.Otherwise, return NO.
  Example
A valid  is  and: and.Return YES.

Function Description

Complete the twoArrays function in the editor below.It should return a string, either YES or NO.

twoArrays has the following parameter(s):

int k: an integer
int A[n]: an array of integers
int B[n]: an array of integers
Returns
  - string: either YES or NO

Input Format

The first line contains an integer, the number of queries.

The next  sets of  lines are as follows:

The first line contains two space - separated integers  and, the size of both arrays  and, and the relation variable.
The second line contains  space - separated integers.
The third line contains  space - separated integers.
  Constraints

Sample Input

STDIN       Function
----- --------
  2           q = 2
3 10        A[] and B[] size n = 3, k = 10
2 1 3       A = [2, 1, 3]
7 8 9       B = [7, 8, 9]
4 5         A[] and B[] size n = 4, k = 5
1 2 2 1     A = [1, 2, 2, 1]
3 3 3 4     B = [3, 3, 3, 4]
Sample Output

YES
NO
 */
