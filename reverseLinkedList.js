//Reverse a singly linked list.
/**f
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = (node) => {
  if (node === null || node.next === null) {
    return node;
  }
  let prevNode = null;
  let currNode = node;
  while (currNode !== null) {
    let next = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = next;
  }
  return prevNode;
};
