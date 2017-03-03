/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  var results = [];
  function inOrder(node){
    if(node) {
      inOrder(node.left);
      results.push(node.val);
      if(results.length === k){
        return;
      }
      inOrder(node.right);
    }
  }
  inOrder(root);
  return results[k-1];
};
