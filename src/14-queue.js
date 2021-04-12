// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  get size() {
    return this.length;
  }

  enqueue(element) {
    // function ListNode(x) {
    //   this.value = x;
    //   this.next = null;
    // }
    if (this.head === undefined) {
      this.length = 1;
      const newElem = new ListNode(element);
      this.head = newElem;
    } else {
      const node = new ListNode(element);
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  dequeue() {
    let tempVal;
    if (this.length === 1) {
      tempVal = this.head.value;
      this.head = null;
      this.length = 0;
    } else {
      let delNode = this.head;
      for (let i = 0; i < this.length - 2; i++) {
        delNode = delNode.next;
      }
      tempVal = delNode.next.value;
      delNode.next = null;
      this.length--;
    }

    return tempVal;
  }
}

module.exports = Queue;
