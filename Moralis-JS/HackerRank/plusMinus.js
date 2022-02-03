'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let sumPos = 0;
  let sumNeg = 0;
  let sumZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumPos += 1;
    } else if (arr[i] < 0) {
      sumNeg += 1;
    } else if (arr[i] === 0) {
      sumZero += 1;
    }
  }
  let proportionPos = (sumPos / arr.length).toFixed(6);
  let proportionNeg = (sumNeg / arr.length).toFixed(6);
  let proportionZero = (sumZero / arr.length).toFixed(6);
  console.log(proportionPos);
  console.log(proportionNeg);
  console.log(proportionZero);

}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
