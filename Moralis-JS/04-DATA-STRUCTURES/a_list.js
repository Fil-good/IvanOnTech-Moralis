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
  let list = null;
  for( let i = array.length-1; i>=0; i--)
    list = {value: array[i], rest: list};
  // console.log(list);
  return list;
}

/* The test for the arrayToList function*/
let array_ex = [1,2,3];
// console.log(arrayToList(array_ex));


function listToArray(list) {
  console.log(`list: ${list}`)
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
    console.log(`node: ${node}`); console.log(`node.rest: ${node.rest}`);
    console.log(`node.value: ${node.value}`);
    console.log(`array iterations: ${array}`);
  }
  return array;
}
console.log(`calling function: ${listToArray(list)}`);


console.log("-----------------------");

function prepend(element, list) { /* add an element to the front of the list */
    return {
      value: element,
      rest: list
    };
  }

function nth(list, number) {
  return listToArray(list)[number];
}

function nthRecursive(list, number) {
  if (number === 0) {
    return list.value;
  } else if (list.rest === null) {
    return undefined;
  } else {
    return nthRecursive(list.rest, number - 1);
  }
}
