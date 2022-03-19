function lonelyinteger(a) {
  // Write your code here
  let sortedA = new Uint8Array(a).sort();
  // console.log(sortedA);
  let n = sortedA.length;

  let lonely = 0;

  // with breakme you can choose what to break
  // still one testcase on hackerrank that doesn't pass (case of n=1 I guess)

  breakme: for (let i = 0; i < (n-2); i+=2) {
    console.log(`i before if: ${i}`);
    if (sortedA[i] != sortedA[i+1]) {
      console.log(`i after if: ${i}`);
      lonely = (sortedA[i]);
      break breakme;
    } else {
      lonely = sortedA[n-1];
    }
  }
console.log(lonely);
};



// n=7, should iterate to 5th element, index 4
let aa = [1,2,2,4,4];
lonelyinteger(aa)
