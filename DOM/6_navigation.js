// HTML DOM, we can navigate the node tree using node relationships.

// DOM Nodes:
// The entire document is a document node
// Every HTML element is an element node
// The text inside HTML elements are text nodes
// Every HTML attribute is an attribute node (deprecated)
// All comments are comment nodes

// Node relationships: The node tree have a hierarchical relationship to each other.
// In a node tree, the top node is called the root (or root node)
// Every node has exactly one parent, except the root (which has no parent)
// A node can have a number of children
// Siblings (brothers or sisters) are nodes with the same parent

document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;

// DOM Root Nodes:
// document.body = the body of document
// document.documentElement = full document

document.getElementById("demo").innerHTML = document.body.innerHTML;

// nodeName: This property specifies the name of node.

document.getElementById("id04").innerHTML = document.getElementById("id03").nodeName;