Object.prototype.newIndexOf = function(expression) {
    var exprIndex = 0, objIndex = 0;
    var str = this;
    while(str instanceof String && str.length && objIndex < str.length) {
        if(str[objIndex] == expression[exprIndex]) {
            exprIndex++;
            if(exprIndex == expression.length)
                return objIndex - exprIndex + 1;
        } else {
            exprIndex = 0;
        }
        objIndex++;
    }
    return -1;
};