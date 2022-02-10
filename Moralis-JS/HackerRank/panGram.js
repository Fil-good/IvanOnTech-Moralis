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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// no break; possible in forEach loop!

// array1 == array2 returns false, even though they contain the same values!!!


function pangrams(s) {
  // Write your code here
  let s2 = s.replace(/\s/g, "");
  let s3 = s2.toUpperCase();
  let s4 = [... new Set(s3)];
  let s5 = s4.sort();


  let alphabet = [...Array(26)].fill().map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i));


  if (JSON.stringify(alphabet) === JSON.stringify(s5)) {
    return 'pangram';
  } else {
    return 'not pangram';
  }
}



function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = pangrams(s);

  ws.write(result + '\n');

  ws.end();
}
