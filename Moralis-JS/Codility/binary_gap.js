
// match with regular expression only returns the first match
// find method only returns the first element
// filter method works on arrays, so doesn't solve the problem

function take_max_length_of_array(all_matches_array) {
  let max_length = 0;

  if (all_matches_array === []) {
    return 0;
  } else {
      for (match of all_matches_array) {
        console.log(`in for loop: match.length::${match.length}`);
        if (match.length-2 > max_length) {
          max_length = match.length-2;
        }
      }
      return max_length;
    }
}

function solution(N) {
  let bin_number = N.toString(2); /* is a number starting with 1, or 0 if 0 (decimal) */
  let regExp = /10+1/g;
  console.log(`bin_number: ${bin_number}`); /**probleem met 549!!!!!!!!!! */

  let all_matches_array = [];
  for (i=0; i< bin_number.length; i+=1) {
  part_of_bin_arr = bin_number.slice(i);
  let one_match = part_of_bin_arr.match(regExp);
    if (one_match !== null) { all_matches_array.push(one_match[0]) }; /*without zero index: gives array of array !!!!!!!??????!!!! */
  }


console.log(`all_matches_array:: ${all_matches_array}`);

return take_max_length_of_array(all_matches_array);

}


// difference for of (over values), and for in loop (iterates over property names)

let number = 145; /*10010001 => 3*/
let number2 = 2; /* 10 => 0 */
let number3 = 3; /* 11 => 0 */
let number4 = 549; /* 1000100101 => 3 */
let number5 = 0; /* 0 => 0 */

console.log(`solution(145):: ${solution(number)}`);
console.log(`solution(2=>0):: ${solution(number2)}`);
console.log(`solution(3=>0):: ${solution(number3)}`);
console.log(`solution(549=>3):: ${solution(number4)}`);
console.log(`solution(0=>0):: ${solution(number5)}`);
