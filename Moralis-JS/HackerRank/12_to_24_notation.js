// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//   inputString = inputString.split('\n');

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// working function for the only given example, edge case to be handled 00:00:00AM -> 12:00:00
function timeConversion(s) {
  try {
    let arrayTime = s.split(':');
    let arrayTime_partial = arrayTime[2].split('');
    let arrayTime_minutes = [...arrayTime_partial].slice(0, 2);
    let arrayTime_AMPM = [...arrayTime_partial].slice(2, 4);
    let arrayTime_AMPM_joined = arrayTime_AMPM.join('');
    let arrayTime_minutes2 = [...arrayTime_minutes].join('');

    switch (arrayTime_AMPM_joined) {
      case 'PM':
        let hour = arrayTime[0];
        let newHour = parseInt(hour, 10) + 12;
        let twentyFour = newHour + ":" + arrayTime[1] + ":" + arrayTime_minutes.join('');
        console.log(twentyFour);
        break;
      case 'AM':
        if (arrayTime[0] === '12') {
          let hour = arrayTime[0];
          let newHour = parseInt(hour, 10) - 12;
          let twentyFour = newHour + ":" + arrayTime[1] + ":" + arrayTime_minutes.join('');
          console.log(twentyFour);
        } else {
          let twentyFour = arrayTime[0] + ":" + arrayTime[1] + ":" + arrayTime_minutes.join('');
          console.log(twentyFour);
        }
        break;
      default:
        let twentyFour1 = arrayTime[0] + ':' + arrayTime[1] + ':' + arrayTime_minutes2;
        console.log(twentyFour1);
    }
  }
   catch(e) { console.log(e); }

}
//) function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//   const s = readLine();
//   const result = timeConversion(s);
//   ws.write(result + '\n');
//   ws.end();
// }

// let s3 = "12:00:00AM";
// let s3 = "00:00:00PM";
// let s3 = "01:00:00PM";
let s3 = "01:00:00AM";
timeConversion(s3);
