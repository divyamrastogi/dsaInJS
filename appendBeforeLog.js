Window.prototype.appendBeforeLog = function() {
	var arr = Array.prototype.slice.call(arguments);
	arr.unshift('app log : ');
	console.log(arr.join(' '));
}