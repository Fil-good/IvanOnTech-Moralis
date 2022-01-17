// starting from console.log(sum(range(1, 10)));


// write range function, 2 arguments: start and end, returns array [start ... end]

function range(start_value, end_value) {
  let array_of_numbers = [];
  for (let number = start_value; number === end_value; number += 1) {
    array_of_numbers.push(number)
  }
  array_of_numbers;
}



// browser try-out

// const range = function(start_value, end_value) {
//   let array_of_numbers = [];
//   for (let number = start_value; number < end_value; number = number + 1) {
//     array_of_numbers.push(number)
//   }
//   console.log(array_of_numbers);
// }
// range(1, 5);
