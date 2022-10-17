const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootBST = null;
  }

  root() {
    return this.rootBST;
  }

  add(data) {

    this.rootBST = addNodeTree(this.rootBST, data);

    function addNodeTree(node, val) {
      if (!node) {
        return new Node(val);
      }
      if (val === node.data) {
        return node;
      }

      if (val < node.data) {
        node.left = addNodeTree(node.left, val);
      } else {
        node.right = addNodeTree(node.right, val);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.rootBST, data);

    function hasData(node, val) {
      if (!node) {
        return false;
      }

      if (node.data === val) {
        return true;
      }
      if (val < node.data) {
          return hasData(node.left, val);
        }
      if (val > node.data) {
        return hasData(node.right, val);
      }
    }
  }

  find(data) {
    return findData(this.rootBST, data);

    function findData(node, val) {
      if (!node) {
        return null;
      }

      if (node.data === val) {
        return node;
      }
      if (val < node.data) {
          return findData(node.left, val);
        }
      if (val > node.data) {
        return findData(node.right, val);
      }
    }
  }

  remove(data) {
    this.rootBST = removeData(this.rootBST, data);

    function removeData(node, val) {
      if (!node) {
        return node = null;
      }

      if (val > node.data) {
        node.right = removeData(node.right, val);
        return node;
      } else if (val < node.data) {
        node.left = removeData(node.left, val);
        return node;
      } else {
        if (!node.right && !node.left) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeData(node.right, minRight.value);
        return node;
      }
    }
  }

  min() {
    function retMin(node) {
      if (!node) {
        return null;
      }

      if (!node.left) {
        return node.data;
      } else {
        return retMin(node.left);
      }
  }
  return retMin(this.rootBST);
}

  max() {
    function retMax(node) {
      if (!node) {
        return null;
      }

      if (!node.right) {
        return node.data;
      } else {
        return retMax(node.right);
      }
  }
  return retMax(this.rootBST);
  }
}

module.exports = {
  BinarySearchTree
};