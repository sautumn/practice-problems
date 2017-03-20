function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};



function secondSmallest(node, max) {
  if(node){
    if (!node.left && !node.right) {
      return max;
    }
    max = node.value;
    if (!node.right){
      return secondSmallest(node.left, max);
    }
    else {
      return secondSmallest(node.right, max);
    }
  }
}

var root = new BinaryTreeNode(5);

//
root.insertLeft(4);
root.insertRight(6);
root.right.insertRight(9)
// console.log('root',root);


console.log(secondSmallest(root));
