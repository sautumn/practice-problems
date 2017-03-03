var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  Object.assign(newBST, binarySearchTreeMethods);

  return newBST;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value, parent) {
  if (parent === undefined) {
    parent = this;
  }

  if (parent.value > value) { //left
    if (parent.left === null) { //add child
      var node = BinarySearchTree(value);
      parent.left = node;
      return;
    } else if (parent.left !== null){ //recurse
      var leftChild = parent.left;
      binarySearchTreeMethods.insert(value, leftChild);
    }
  }

  if (parent.value < value) { //rights
    if (parent.right === null) {
      var node = BinarySearchTree(value);

      parent.right = node;
      return;
    } else if (parent.right !== null) { //recurse
      var rightChild = parent.right;
      binarySearchTreeMethods.insert(value, rightChild);
    }
  }
  return;
};

// var tree = new BinarySearchTree(1);
// tree.insert(2);
// tree.insert(3);
// tree.insert(4);
// tree.insert(0);
// console.log(tree);

// function kthSmallestElement(){
//   // first get all the elements inOrder
//
// }

// function inorder(node){
//    if(node){
//       inorder(node.left);
//       console.log(node.value);
//       inorder(node.right);
//    }
// }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            console.log(inorder(tree));
