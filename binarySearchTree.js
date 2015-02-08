var bst;

function BinarySearchTree() {
	this.root = null;
}

BinarySearchTree.prototype.push = function(val) {
	var root = this.root;

	if(!root) {
		this.root = new Node(val);
		return;
	}

	var currentNode = root;
	var newNode = new Node(val);

	while(currentNode) {
		if(val < currentNode.val) {
			if(!currentNode.left) {
				currentNode.left = newNode;
				break;
			}
			else
				currentNode = currentNode.left;
		} else {
			if(!currentNode.right) {
				currentNode.right = newNode;
				break;
			}
			else
				currentNode = currentNode.right;
		}
	}
};

BinarySearchTree.prototype.print = function(node) {
	if(node) {
		console.log(node.val);
		this.print(node.left);
		this.print(node.right);
	} else {
		if(node === undefined && node !== null)
			this.print(this.root);
	}
};

BinarySearchTree.prototype.bfs = function() {
	var queue = new Queue();
	queue.enqueue(this.root);
	while(!queue.isEmpty()) {
		var currentNode = queue.dequeue();
		console.log(currentNode.val);
		if(currentNode.left)
			queue.enqueue(currentNode.left);
		if(currentNode.right)
			queue.enqueue(currentNode.right)
	}
}

BinarySearchTree.prototype.search = function(val) {
	var node = this.root;
	while(node) {
		if(node.val == val)
			return true;
		else {
			if(val < node.val)
				node = node.left;
			else 
				node = node.right
		}
	}
	return false;
}

BinarySearchTree.prototype.isSubtreeGreater = function(node, val) {
	if(!node)
		return true;
	if(node.val > val && this.isSubtreeGreater(node.left, val) && this.isSubtreeGreater(node.right, val))
		return true;
	else
		return false;
}

BinarySearchTree.prototype.isSubtreeLesser = function(node, val) {
	if(!node)
		return true;
	if(node.val < val && this.isSubtreeLesser(node.left, val) && this.isSubtreeLesser(node.right, val))
		return true;
	else
		return false;
}

BinarySearchTree.prototype.isBST = function (node) {
	if(!node)
		return true;
	if(this.isBST(node.left) && this.isBST(node.right) && this.isSubtreeLesser(node.left, node.val) && this.isSubtreeGreater(node.right, node.val))
		return true;
	else 
		return false;
}

BinarySearchTree.prototype.isLeafNode = function() {
	if(node.val && node.left != null && node.right != null)
		return true;
	return false;
}

BinarySearchTree.prototype.findMax = function(node) {
	if(!node)
		node = this.root;
	while(node.right != null) {
		node = node.right;
	}
	return node;
}

BinarySearchTree.prototype.findMin = function(node) {
	if(!node)
		node = this.root;
	while(node.left != null) {
		node = node.left;
	}
	return node;
}

/*
There are mainly 3 cases
1. Leaf node, i.e. no children
2. Only one child.
3. 2 children
4. Case is not defined.
*/
BinarySearchTree.prototype.delete = function(node, val) {
	if(node == null)
		return null;
	else if(val < node.val)
		node.left = this.delete(node.left, val);
	else if(val > node.val)
		node.right = this.delete(node.right, val);
	else {
		/*Case 1*/
		if(node.left == null && node.right == null) {
			node = null;
			return null;
		}
		else if(node.left != null) {
			var temp = node;
			node = node.right;
			temp = null;
		} else if(node.right != null) {
			var temp = node;
			node = node.left;
			temp = null;
		} else {
			/*Case 3*/
			var temp = this.findMin(node.right);
			node.val = temp.val;
			node.right = this.delete(node.right, temp.val);
		}
	}
	return node;
}

function push() {
	var val = document.getElementById('insert').value;
	if(!bst)
		bst = new BinarySearchTree();
	bst.push(43);
	bst.push(3);
	bst.push(13);
	bst.push(23);
	bst.push(33);
	bst.push(53);
	bst.push(63);
	bst.push(73);
	bst.push(83);
	//bst.push(val);
	//redrawBST(bst);
	return false;
}

function redrawBST(bst) {
	var level = 0;
}

function checkEnter(e) {
	if(e.keyCode == 13)
		push();
}

window.onload = push;