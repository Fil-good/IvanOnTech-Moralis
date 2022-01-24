// a list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on..


// theory
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
// console.log(list);


// write a function arrayToList, when given argument [1,2,3]

function arrayToList(array) {
  list = {};
  i = 0;
  for(let index_array = 0; index_array < array.length ; index_array += 1) {
    Object.assign(list, {value: array[i], rest: arrayToList(array[i+1]) })
    console.log(`something strange: ${list}`)
  }
}

example: array = [1,2,3];
arrayToList(array);
