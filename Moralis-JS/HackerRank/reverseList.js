// Iterative Solution

function reverse(head) {
  let node = head, // or let current = head for readibility
    previous,
    tmp;

  while (node) {
    // save next before we overwrite node.next!
    tmp = node.next;

    // reverse pointer
    node.next = previous;

    // step forward in the list
    previous = node;
    node = tmp;
  }
console.log(`previous: ${previous.next}`);
  return previous;
}

let list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value:3,
      next:null
    }
  }
}

reverse(list1)



function makeNode(value) {
  return {
    value: value,
    next: null
  }
}

let node1 = makeNode(3);
let node2 = makeNode(5);
node1.next = node2;
console.log(node1);

reverse(node1);

// recursive solution

/*
function reverse(head) {
if (!head || !head.next) {
  return head;
}
let tmp = reverse(head.next);
head.next.next = head;
head.next = undefined;
// console.log(tmp);
return tmp;
}

// recursive solution 2

function reverse(head) {
  if (!head) {
    return null
  }
  if (!head.next) {
    return head
  }
  var tmp = reverse(head.next);
  head.next.next = head;
  head.next = null
  return tmp;
}
*/
