
// match with regular expression only returns the first match
// find method only returns the first element
// filter method works on arrays, so doesn't solve the problem


function solution(N) {
  let bin_arr = N.toString(2); /* is a number starting with 1 */
  let regExp = /10+1/g;
  // console.log(`bin_arr: ${bin_arr}`);

  let all_matches_array = [];
for (i=1; i< bin_arr.length; i+=1) {
  part_of_bin_arr = bin_arr.slice(i);
  let one_match = part_of_bin_arr.match(regExp);
  if (one_match !== null) { all_matches_array.push(one_match) };
}

console.log(`all_matches_array:: ${all_matches_array}`);

take_max_length_of_array(all_matches_array);

}


// difference for of (over values), and for in loop (iterates over property names)

function take_max_length_of_array(all_matches_array) {/**to work on this !!!!!!!!!!!!!!!!!!!! */
  let max_length = 0;
  for (let match of all_matches_array) {
    console.log(`in for loop: match//${match}`);
    let length = match.length;
    if (length > max_length) {
      max_length = length;
    }
  }

  return (all_matches_array === [] ? 0 : max_length);
}

let number = 145; /*10010001 => 3*/
let number2 = 1061;
let number3 = 3;
console.log(`solution(145):: ${solution(number)}`);
// console.log(solution(number2));
// console.log(solution(number3));
