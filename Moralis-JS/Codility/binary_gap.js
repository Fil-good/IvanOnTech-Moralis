function solution(N) {
  let bin_arr = N.toString(2);
  let regExp = /1(0+)1/;
  const matches = bin_arr.match(regExp);
  return (matches[1].length);
}

let number = 145; /*10010001 => 3*/
let number2 = 1061;
let number3 = 3;
solution(number);
solution(number2);
solution(number3);
