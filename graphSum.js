var GraphNode = function(value) {
  this.value = value;
  this.connections = []
};

GraphNode.prototype.addConnection = function(node2) {
  return this.connections.push(node2);
};

var a = new GraphNode('2');
var b = new GraphNode('1');
var c = new GraphNode('4');
var d = new GraphNode('3');
var e = new GraphNode('6');
var f = new GraphNode('7');

b.addConnection(a);
b.addConnection(c);
// b.addConnection(d);
// b.addConnection(e);
// c.addConnection(e);
// c.addConnection(d);
//
// d.addConnection(f);

function graphSum(node) {
  var max = 0;
  function allNodesPaths(node, sum){
    //dead end
    if (node.connections.length === 0){
      if (sum > max){
        max = sum;
      }
      // stop recursion, save sum
      return;
    }
    if (!sum) {
      //first time thru
      sum = node.value;
    }
    // look at all the nodes
    for (var i = 0; i < node.connections.length; i++) {
      var currNode = node.connections[i];
      allNodesPaths(currNode, parseInt(sum) + parseInt(currNode.value));
    }
  }
  allNodesPaths(node, 0);
  return max;
}

console.log(graphSum(b));
