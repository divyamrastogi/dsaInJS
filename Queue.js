function Queue() {
	this.q = [];
}

Queue.prototype.enqueue = function(node) {
	this.q.push(node);
}

Queue.prototype.dequeue = function() {
	return this.q.shift();
}

Queue.prototype.isEmpty = function() {
	return this.q.length == 0;
}