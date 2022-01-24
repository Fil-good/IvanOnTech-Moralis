

// created a new array, without using the reverse method!

function reverseArray(array) {
  new_array =[];
  for(let index = 1; index < array.length + 1; index += 1) {
  new_array.push(array[array.length - index]);
  }
  console.log(new_array);
}

// example
given_array = [1,2,3,4,5];
// reverseArray(given_array);
reverseArrayInPlace(given_array);


// modifies the array
function reverseArrayInPlace(array) {
  i = 0;
  temp_array = [];
  for(let index = given_array.length - 1 ; index > -1 ; index -= 1) {
    temp_array[i] = array[index];
    console.log(`temp_array[${i}] = array[${index}]`);
    i +=1;
    console.log(`unchanged array after interation: ${array}`);
  }
  console.log(array);
  array = temp_array;
  console.log(array);
} /* [ 5, 4, 3, 2, 1 ] */
