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




function flippingBits(n) {

  let BinN = n.toString(2);
  let lengthBinN = BinN.length;

  let newString = '';

  for (let i = BinN.length - 1; i >= 0; i--) {
    if (BinN[i] === '0') {
      newString = '1' + newString;
    } else {
      newString = '0' + newString;
    }
  }
  let string32 = '1'.repeat(32 - lengthBinN) + newString;
  let returnNum = parseInt(string32, 2);
  return returnNum;

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
