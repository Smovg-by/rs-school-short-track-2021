/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let obj = {};
  let obj1 = {};
  obj1 = { ...l };
  obj = { head: obj1 };
  // console.log(l);
  obj.deleteitem = function (val) {
    if (this.head.value === val) {
      //     console.log("matched in head");
      this.head = this.head.next;
    }
    let previousNode = this.head;
    let currentNode = previousNode.next;
    while (currentNode) {
      if (currentNode.value === val) {
        //         console.log("matched in body");
        previousNode.next = currentNode.next;
        currentNode = currentNode.next;
        break;
      } else {
        //         console.log("next step");
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  };
  obj.deleteitem(k);
  // console.log(obj)
  obj.printArr = function () {
    const resArr = [];
    let tmp = this.head;
    while (tmp) {
      //       console.log(tmp.value);
      resArr.push(tmp.value);
      tmp = tmp.next;
    }
    return resArr;
  };
  let newAr = [];
  newAr = obj.printArr();
  // console.log(newAr);
  function ListNode(x) {
    this.value = x;
    this.next = null;
  }
  function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
  }
  let obj3 = {};
  obj3 = convertArrayToList(newAr);
  return obj3;
}

module.exports = removeKFromList;
