function birthday(s, d, m) {
  // s[n] = numbers [2,2,1,3,2] ; d = 4 ; m = 2
  // return number of ways it can be divided

// split the array in all possible ways
// counter += 1 if conditions are met: number of elements = d , sum of elements = m

let n = s.length;
let counter = 0;


for(let i=0; i<(n-m+1); i++) {
  let subarray = s.slice(i,i+m);
  if (subarray.reduce((x,y) => x +y) === d) {
    counter += 1;
  }
}
return counter;


}
