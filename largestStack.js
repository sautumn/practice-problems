function Stack() {
  // initialize an empty array
  this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
  this.items.push(item);
};


// remove the last item
Stack.prototype.pop = function() {
  // if the stack is empty, return null
  // (it would also be reasonable to throw an exception)
  if (!this.items.length) {
      return null;
  }
  return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
  if (!this.items.length) {
      return null;
  }
  return this.items[this.items.length -1];
};

function MaxStack() {
  //init two stacks
  this.stack    = new Stack();
  this.maxStack = new Stack();
};

// Use your Stack class to implement a new class MaxStack with a function getMax()
// that returns the largest element in the stack. getMax() should not remove the item.

MaxStack.prototype.push = function(value) {
  this.stack.push(value);
  var currentMax = this.maxStack.peek();
  if (currentMax === null || value >= currentMax) {
    this.maxStack.push(value);
  }
};

MaxStack.prototype.pop = function() {
  var poppedValue = this.stack.pop();
  if (this.maxStack.peek() === this.poppedValue) {
    this.maxStack.pop();
  }
  return poppedValue;
};

MaxStack.prototype.getMax = function() {
  return this.maxStack.peek();
};
