const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        this.data = data; 
        var node = new Node(this.data);
        
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        //console.log(node.data);
        //console.log(this.length);
        //console.log(this._tail);
    }

    head() {
        return this._head.data;
    }
        
    tail() {
        return this._tail.data;
    }
        
    at(index) {
        var node = this._head,
            length = this.length,
            count = 0;
        while (count < index) {
            node = node.next;
            count++;
        }
        return node.data;
    }

    insertAt(index, data) {
        var node = this._head,
            count = 0;
        while (count < index) {
            node = node.next;
            count++;
        }
        var insert = new Node(data);
        insert.prev = node.prev;
        node.prev.next = insert;
        node.prev = insert;
        insert.next = node;
        this.length++;
        //console.log(node);
        //console.log(insert);
    }

    isEmpty() {
        if (this.length)
            return false;
        else return true;
    }

    clear() {
        var node = this._head,
            count = 0;
        while (count < this.length) {
            node = node.next;
            count++;
            this._head.data = null;
        }
        this._tail.data = null;
        this.length = 0;
    }

    deleteAt(index) {
        var node = this._head,
            count = 0;
        while (count < index) {
            node = node.next;
            count++;
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;
        node = null;
        
        this.length--;
    }

    reverse() {
        var node = this._head,
            edon = this._head,
            count = 0,
            array = [];
        while (count < this.length) {
            array.push(node.data);
            node = node.next;
            count++;
        }
        count--;
        while (count >= 0) {
            edon.data = array[count];
            edon = edon.next;
            count--;
        }
    }

    indexOf(data) {
        var node = this._head,
            count = 0;
        while (count < this.length) {
            if (node.data == data)
                return count;
            else {
                node = node.next;
                count++;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
