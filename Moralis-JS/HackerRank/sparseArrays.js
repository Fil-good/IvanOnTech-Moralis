function matchingStrings(strings, queries) {
  // Write your code here
  let n = strings.length;
  let q = queries.length;
// you would need an array of counters, length = q
  let counters = new Array(q).fill("");
  let countersInt = new Int8Array(counters);

  for(let j=0; j<q; j++) {
    for(let i=0; i<n; i++) {
      if(strings[i] === queries[j]) {
        countersInt[j] += 1;
      }
    }
  }
  console.log(countersInt);



}


let strs = ["a", "abcd", "a"];
let qrs = ["a", "abcd", "abcdefgh"];
matchingStrings(strs,qrs)
