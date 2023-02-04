// Functions: push, pop, peek(top), length

/* Palindrome */

var letters = []; // this is our stack
var word = "racecar";
var rword = "";

// put lettors into the stack
for(var i=0; i<word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i=0; i<word.length; i++) {
    rword += letters.pop();
}

if (rword == word) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " not palindrome");
}

/* Create a stack */
var Stack = function() {
    this.count = 0;
    this.storage = {};

    // adds a value into the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var S = new Stack();
S.push(1);
S.push(2);
console.log(S.peek());
console.log(S.pop());
console.log(S.peek());
console.log(S.size());












