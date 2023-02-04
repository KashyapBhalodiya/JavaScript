function mySet() {
    var Collection = []; // hold the collection of set

    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (Collection.indexOf(element) !== -1);
    };

    // this method will return all the values in the set
    this.values = function() {
        return Collection;
    };

    // this method will add an element to the set
    this.add = function(element) {
        if (!this.has(element)) {
            Collection.push(element);
            return true;
        }
        return false;
    };

    // this method will remove an element from a set
    this.remove = function(element) {
        if (!this.has(element)) {
            index = Collection.indexOf(element);
            Collection.splice(index, 1);
            return true;
        }
        return false;
    };

    // this method will return the size of the collection
    this.size = function() {
        return Collection.length;
    };

    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e);
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        });
        return unionSet;
    };

    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var interSectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (otherSet.has(e)) {
                interSectionSet.add(e);
            }
        });
        return interSectionSet;
    };

    // this method will return the difference of two sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    // this method will test if the set is a subset of a different set
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(values) {
            return otherSet.has(values);
        });
    };
}

var setA = new mySet();
var setB = new mySet();
setA.add("A");
setA.add("B");
setB.add("C");
setB.add("D");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values);
console.log(setA.difference(setB).values);

var setC = new mySet();
var setD = new mySet();
setC.add("a");
setC.add("b");
setC.add("c");
setD.add("a");
setD.add("b");
setD.add("c");
setD.add("d");
setD.add("e");
console.log(setD.values());
setD.remove("a");
console.log(setD.has("a"));
console.log(setD.add("f"));

