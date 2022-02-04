'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */


// in the instructions they take into account all the program when giving examples:
// return integer is for the main() function, as the flippingBits needs to
// return a string!!!!
function flippingBits(n) {
  // Write your code here
  let BinN = n.toString(2); console.log(BinN);
  let newString = '';
  for (let i = 0; i < BinN.length; i++) {
    if (BinN[i] === '0') {
      newString += '1';
    } else {
      newString += '0';
    }
  }

  return newString;

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const n = parseInt(readLine().trim(), 10);

    const result = flippingBits(n);

    ws.write(result + '\n');
  }

  ws.end();
}
