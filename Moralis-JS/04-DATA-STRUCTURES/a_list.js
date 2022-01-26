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

function arrayToListWithHints(array) {
  let result = {};
  if (Array.isArray(array)) {
    let list = null;
    array = array.reverse();
    for (let item of array) {
      list = {
        value: item,
        rest: list
      };
    }
    result = list;
  }
  return result;
}


/* The test for the arrayToList function*/
let array_ex = [1,2,3];
// console.log(arrayToList(array_ex));


function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
    // console.log(`node: ${node}`); console.log(`node.rest: ${node.rest}`);
    // console.log(`node.value: ${node.value}`);
    // console.log(`array iterations: ${array}`);
  }
  return array;
}
console.log(`calling function: ${listToArray(list)}`);

function listToArrayWithHints(list) {
  let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result;
  } else {
    for (let node = list; node; node = node.rest) {
      if (node.hasOwnProperty('value')) {
        result.push(node.value);
      }
    }
  }
  return result;
}


console.log("-----------------------");

function prepend(element, list) { /* add an element to the front of the list */
    return {
      value: element,
      rest: list
    };
  }


// number 0 refers to the first element
function nth(list, number) {
  return listToArray(list)[number];
}
console.log(`nth: " ${nth(list, 2)} "`);

let number = 2;
console.log(`nth: ${nth(list, number)}`);

function nthRecursive(list, number) {
  if (number === 0) {
    return list.value;
  } else if (list.rest === null) {
    return undefined;
  } else {
    return nthRecursive(list.rest, number - 1);
  }
}
