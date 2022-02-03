
function flippingBits(n) {
  // Write your code here
  let BinN = n.toString(2); console.log(BinN);
  let newString = '';
  for (let i = 0; i < BinN.length; i++) {
    if (BinN[i] === 0) {
      newString += 1; console.log(newString);
    } else {
      newString += 0;
    }
  }
  console.log(newString);
