class Stack {
  constructor () {
    this.items = [];
    this.count = 0;
  }

  // add an element, like push
  addElementToStack(element) {
    this.items[this.count] = element;
    console.log(`${element} added to position ${this.count}`)
    this.count += 1;
    return this.count - 1; // return the position where element is added
  }


  popElement() {
  if (this.count === 0) {
    return undefined;
  } else {
    console.log(`this.items: ${this.items} this.count ${this.count}`)
    let popPosition = this.count - 1; console.log(`popPos: ${popPosition}`)
    this.items.splice(popPosition, 1); // or you can simply decrease the this.count by - 1
    console.log(`${this.items}`)
    this.count -= 1;
  }
  }


// check top element in stack
peek() {
  let lastElementIndex = this.count - 1;
  console.log(`this.count: ${this.count} last element ${this.items[lastElementIndex]}`);
  return this.items[this.count-1];

}

isEmpty() {
  if (this.count == 0) {
    console.log(`stack is empty`)
    return 'is not Empty';
  } else {
    console.log(`stack is not empty`)
    return 'is empty';
  }
}

size() {
  console.log(`size of stack: ${stack.count}`);
  return stack.count;
}

print() {
  let printedItems = '';
  for(let item of this.items) {

    printedItems += item + ' ';
  }
  console.log(`printed item: ${printedItems}`);
  return printedItems;
}

clear() {
  this.items.splice(0);
  this.count = 0;
  console.log(`items: ${this.items}`);
}

}
const stack = new Stack();

stack.addElementToStack(100);
stack.addElementToStack(200);
stack.print();
stack.isEmpty();
stack.addElementToStack(300);
stack.popElement();
stack.peek();
stack.print();
stack.clear();
stack.print();
