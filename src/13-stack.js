/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  // add the array constructor
  constructor() {
    this.arr = [];
  }

  // add the 'push' method
  push(element) {
    this.arr.push(element);
  }

  // add the 'pop' method.
  pop() {
    // if array is empty, return 'undefined'
    if (this.arr.length === 0) {
      return undefined;
    } // if array is not empty - return deleted element
    return this.arr.pop();
  }

  // return the last element (the 'peel of the stack')
  peek() {
    return this.arr[this.arr.length - 1];
  }
}

module.exports = Stack;
