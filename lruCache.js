//Ordered items, so whats at the head will be the oldest
//Finding an item will be the same lookup time worst case
//But if we can start at the back, then its better than just a
//single linked list.

//Could use a Set in ES6? def no arrow funcs bc this binding :)

const LRUCache = function(capacity) {
  // Limited capacity
  this.maxSize = capacity;
  this.currSize = 0;
  // Pointers to front and back to help with lookup
  this.head = null;
  this.tail = null;
  // Our nodes will be stored here
};

// Node for insertion
const Node = function(value) {
  const node = {};
  node.value = value;
  node.prev = null;
  node.next = null;
  return node;
};

// Will add an item to the LRUCache
LRUCache.prototype.set = function(key, value) {
  // Store our new key value an array and make a node
  let currNode = new Node([key, value]);

  // First we need to see if we exceeded our size
  if (this.maxSize === this.currSize) {
    // Delete the head and set the next element to the head
    if (this.head.next){
      // if there is an item after the head
      this.head = this.head.next;
      //removed the ref to the old head so it will DIE
      // set the new nodes prev to null
      this.head.prev = null;
    } else {
      //No other items left in the list
      this.head = null;
      this.tail = null;
    }
    //Decrement our size because we deleted a node
    this.currSize--;
  }
  // Now we can insert some nodes in our cache

  // Check if there is anything at the head
  if (!this.head && !this.tail) { //just to be super thorough
    // no head, our curr node is the head and tail
    this.head = currNode;
    this.tail = currNode;
    this.currSize++;
  } else {
    // otherwise we just need to check the tail and make
    // our curr node the new tail, reset the old tails
    // next and prev nodes
    let tailNode = this.tail;
    tailNode.next = currNode;
    currNode.prev = tailNode;
    this.tail = currNode;
    // Increment size
    this.currSize++;
  }
};

//helper function for our lookup
//use it to add our recently used nodes to the end of the list
LRUCache.prototype._moveToTail = function(node) {
  if (this.tail === node || !this.head.next) {
    // We dont want to do anything if we are already at the end
    // Or if we only have one item in our list
    return;
  }
  //Update pointers around the node to remove refs

  //check to see if we are at the head
  if (this.head === node){
    let newHead = this.head.next;
    this.head = newHead;
    newHead.prev = null;
  } else {
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    // Now that its GONE, we need to add it to the tail
    let oldTail = this.tail;
    this.tail = node;
    // update all our 'pointers'
    node.next = null;
    node.prev = oldTail;
    oldTail.next = node;
  }
  // return;
};

//Lookup by key
LRUCache.prototype.get = function(key) {
  //We need to find the element in the list
  //And move it to the tail
  //Start at head and look through the list
  let result = -1;
  let currNode = this.head;
  while (currNode) {
    if(currNode.value[0] === key){
      result = currNode.value[1];
      //We need to update our list and move this one to the tail
      //use the helper from above
      this._moveToTail(currNode);
      break;
    } else {
      // Keep looking through until we find it or exhaust it
      currNode = currNode.next;
    }
  }
  //If we didnt find it, return -1;
  return result;
};



const lru = new LRUCache(3);
lru.set(1,1);
lru.set(2,2);
lru.set(3,3);
//LRU 1,2,3

function assert(expected, got, should) {
  if (expected !== got) {
    console.log(`${should} : Expected ${got}, but got ${expected} instead`);
  } else {
    console.log('Test passed.');
  }
}

assert(lru.get(1), 1, 'Should return 1 from the LRU');
//LRU 2,3,1
lru.set(4,4);
//LRU 3,1,4
assert(lru.get(2), -1, 'Should return -1 from the LRU bc 2 was evicted');
assert(lru.get(4), 4, 'Should get 4 and leave it at the tail');
