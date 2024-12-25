const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.start = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    if (this.size === 0) {
      this.start = new ListNode(value);
    } else {
      let currentEl = this.start;

      while (currentEl.next) {
        currentEl = currentEl.next;
      }

      currentEl.next = new ListNode(value);
    }

    this.size++;
  }

  dequeue() {
    if (!this.start) {
      return null;
    }
    let removed = this.start;
    if (this.start === this.size) {
      this.start = null;
      this.size = 0;
    } else {
      this.start = this.start.next;
    }
    return removed.value;
  }
}

module.exports = {
  Queue
};
