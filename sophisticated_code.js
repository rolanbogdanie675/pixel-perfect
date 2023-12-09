/*
   Filename: sophisticated_code.js
   Description: This code demonstrates a complex and sophisticated implementation of a data structure called "Binary Search Tree". It includes various operations like insertion, deletion, search, traversal, and more.

   Note: The code is solely focused on functionality and complexity, not on optimization or error handling.

   Author: [Your Name]
   Date: [Today's Date]
*/

class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor() {
      this.root = null;
   }

   insert(value) {
      const newNode = new Node(value);

      if (this.root === null) {
         this.root = newNode;
      } else {
         let currentNode = this.root;

         while (true) {
            if (value < currentNode.value) {
               if (currentNode.left === null) {
                  currentNode.left = newNode;
                  break;
               }
               currentNode = currentNode.left;
            } else {
               if (currentNode.right === null) {
                  currentNode.right = newNode;
                  break;
               }
               currentNode = currentNode.right;
            }
         }
      }
   }

   search(value) {
      let currentNode = this.root;

      while (currentNode !== null) {
         if (value === currentNode.value) {
            return true;
         } else if (value < currentNode.value) {
            currentNode = currentNode.left;
         } else {
            currentNode = currentNode.right;
         }
      }

      return false;
   }

   remove(value) {
      const removeNode = (node, value) => {
         if (node === null) {
            return null;
         }

         if (value === node.value) {
            if (node.left === null && node.right === null) {
               return null;
            }

            if (node.left === null) {
               return node.right;
            }

            if (node.right === null) {
               return node.left;
            }

            let tempNode = node.right;
            while (tempNode.left !== null) {
               tempNode = tempNode.left;
            }
            node.value = tempNode.value;
            node.right = removeNode(node.right, tempNode.value);
            return node;
         } else if (value < node.value) {
            node.left = removeNode(node.left, value);
            return node;
         } else {
            node.right = removeNode(node.right, value);
            return node;
         }
      };

      this.root = removeNode(this.root, value);
   }

   traverseInOrder() {
      const result = [];

      const traverse = (node) => {
         if (node !== null) {
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
         }
      };

      traverse(this.root);
      return result;
   }

   traversePreOrder() {
      const result = [];

      const traverse = (node) => {
         if (node !== null) {
            result.push(node.value);
            traverse(node.left);
            traverse(node.right);
         }
      };

      traverse(this.root);
      return result;
   }

   traversePostOrder() {
      const result = [];

      const traverse = (node) => {
         if (node !== null) {
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
         }
      };

      traverse(this.root);
      return result;
   }
}

// Usage example
const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(2);
bst.insert(4);
bst.insert(7);
bst.insert(9);

console.log(bst.traverseInOrder()); // [2, 3, 4, 5, 7, 8, 9]
console.log(bst.search(7)); // true

bst.remove(8);
console.log(bst.traversePreOrder()); // [5, 3, 2, 4, 7, 9]
