function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    this.size = function() {
        return length;
    }

    this.head = function() {
        return head;
    }

    this.add = function(element) {
        var node = new Node(element);
        if (head == null) {
            head = node;
        } else {
            currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    }

    this.remove = function(element) {
        var cur = head;
        var prev;
        if (cur.element === element) {
            head = cur.next;
        } else {
            while (cur.element !== element) {
                prev = cur;
                cur = cur.next;
            }
            prev.next = cur.next;
        }
        length--;
    };

    this.isEmpty = function() {
        return length === 0;
    }

    this.indexOf = function(element) {
        var cur = head;
        var index = -1;

        while (cur) {
            index++;
            if (cur.element === element) {
                return index;
            }
            cur = cur.next;
        }
        return -1;
    }

    this.elementAt = function(index) {
        var cur = head;
        var count = 0;
        while (count < index) {
            count++;
            cur = cur.next;
        }
        return cur.element;
    }

    this.addAt = function(index, element) {
        var node = new Node(element);
        var cur = head;
        var prev;
        var curIndex = 0;

        if (index > length) {
            return false;
        }

        if (index === 0) {
            node.next = cur;
            head = node;
        } else {
            while (curIndex < index) {
                curIndex++;
                prev = cur;
                cur = cur.next;
            }

            node.next = cur;
            prev.next = node;
        }
        length++;
    }

    this.removeAt = function(index) {
        var cur = head;
        var prev;
        var curIndex = 0;

        if (index < 0 || index >= length) {
            return null;
        }

        if (index === 0) {
            head = cur.next;
        } else {
            while (curIndex < index) {
                curIndex++;
                prev = cur;
                cur = cur.next;
            }
            prev.next = cur.next;
        }
        length--;
        return cur.element;
    }
}

var ll = new LinkedList();
ll.add('Kitten');
ll.add('Puppy');
ll.add('Dog');
ll.add('Cat');
ll.add('Fish');

console.log(ll.size());
console.log(ll.removeAt(3));
console.log(ll.elementAt(3));
console.log(ll.indexOf('Lion'));
console.log(ll.size());
