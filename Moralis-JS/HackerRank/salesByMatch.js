function sockMerchant(n, ar) {
  let socksCount = {};
  for (let i = 0; i < n; i++) {
    let sock = ar[i];
    if (socksCount[sock] == undefined) {
      socksCount[sock] = 1;
    } else {
      socksCount[sock] += 1;
    }
  }
  console.log(socksCount);

// iterate over an object
  let numberOfPairs = 0;
  for(const [key, value] of Object.entries(socksCount)) {
    numberOfPairs += Math.floor(value / 2);
  }
  console.log(numberOfPairs);

}

let n = 10;
let ar = [2,2,3,3,4,4,5,6,7,7];

sockMerchant(n,ar);
