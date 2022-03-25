
// https://daveceddia.com/linked-lists-javascript/

// left at practicality first: head and tail, and read once to the end;

let node = {
  value: 5,
  next: null
}

function makeNode(value) {
  return {
    value: value,
    next: null
  }
}

// every node is a list (unlike an array where an element does not need to be an array)
function printList(list) {
let current = list; // you assign the list to the current node
while(current) {
  console.log(`current.value in while loop: ${current.value}`); // values througout the loop
  current = current.next;
}
}

function recursivePrinting(list) {
  if(list) {
    console.log(list.value);
  } else {
    return;
  }
recursivePrinting(list.next);
}


let node1 = makeNode(3);
let node2 = makeNode(5);
node1.next = node2; console.log(node1); // printing without function

printList(node1); // prints the list
recursivePrinting(node1);
