// in order to run this file, go to the terminal and type 'node file.js'

/* starting from console.log(sum(range(1, 10)));
write range function, 2 arguments: start and end, returns array [start ... end]
*/

function range(start_value, end_value) {
  let array_of_numbers = [];
  for (let number = start_value; number <= end_value; number += 1) {
    array_of_numbers.push(number);
  }
  console.log(`yo! ${array_of_numbers}`);
}

// console.log("test");
// console.log(range(0, 5));


function sum(array) {
  sum_of_values = 0;
  array.forEach(element => {
  sum_of_values += element;

});
console.log(sum_of_values);
}

array_to_sum = [1,2,3,4,5];
// sum(array_to_sum);
sum2(array_to_sum,2);


// sum of array, with extra argument that indicates the "step"
function sum2(array, step) {
  adjusted_array = [];
  for(let counter = 0; counter < array.length; counter += step) {
    adjusted_array.push(array[counter]);
  }
  sum(adjusted_array);
  console.log(adjusted_array);
  };
