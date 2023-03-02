export default class BST {
  constructor() {
    this.root = null;
  }

  search(value) {
    if (this.root.data === value) {
      return true;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data === value) {
          return true;
        } else if (currentNode.data > value) {
          currentNode = currentNode.left;
        } else if (currentNode.data < value) {
          currentNode = currentNode.right;
        }
        if (currentNode === null) {
          return false;
        }
      }
    }
  }

  remove(value) {
    if (this.root.data === value) {
      return false;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data === value) {
          console.log(currentNode)
          //ONLY leaf nodes (no L/R children)
          if(currentNode.left === null && currentNode.right === null){
            currentNode.data = null;
          //ONLY has L child
          } else if(currentNode.left !== null && currentNode.right === null) {
            console.log('left OK right empty')
            currentNode = currentNode.left;
            // currentNode.left = currentNode.left?.left;
            // currentNode.right = currentNode.left?.right;
          } else {
            console.log('didnt remove anything');
            return false;
          }
        } else if (currentNode.data > value) {
          currentNode = currentNode.left;
        } else if (currentNode.data < value) {
          currentNode = currentNode.right;
        }
        if (currentNode === null) {
          return false;
        }
      }
    }
  }

  insertNode(insertedNode) {
    if (this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (currentNode.left === null) {
            currentNode.left = insertedNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            return this;
          } else {
            currentNode = currentNode.right
          }
        } else {
          return this;
        }
      }
    }
  }
}