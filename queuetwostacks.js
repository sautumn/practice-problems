// Implement a queue ↴ with 2 stacks ↴ .
// Your queue should have an enqueue and a dequeue function
// and it should be "first in first out" (FIFO).
// Optimize for the time cost of mm function calls on your queue.
// These can be any mix of enqueue and dequeue calls.
//
// Assume you already have a stack implementation
// and it gives O(1)O(1) time push and pop.

const Queue = function() {
  this.inbox = [];
  this.outbox = [];
};

Queue.prototype.enqueue = function(value) {
  this.inbox.push(value);
  return `Added ${value}`;
};

Queue.prototype.dequeue = function() {
  if (this.outbox.length === 0) {
    if (this.inbox.length === 0) {
      return `No items in queue`;
    }
    for (let i = 0, length = this.inbox.length; i < length; i++) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return `Removed ${this.outbox.pop()} from queue`;
};

let newQueue = new Queue();
//
newQueue.enqueue('1');
newQueue.enqueue('2');
newQueue.enqueue('3');

console.log(newQueue)

console.log(newQueue.dequeue());

console.log(newQueue);

newQueue.enqueue('4');

console.log(newQueue);

console.log(newQueue.dequeue());

console.log(newQueue);

console.log(newQueue.dequeue());

console.log(newQueue);

console.log(newQueue.dequeue());

console.log(newQueue);

console.log(newQueue.dequeue());
