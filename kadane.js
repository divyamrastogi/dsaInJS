module.exports = { 
	//param A : array of integers
	//return an integer
	maxSubArray : function maxSubArray(A) {
	    return this.mss(A, 0, A.length);
	},
	mss: function mss(A, left, right) {
	    if (left === right) {
	        return A[left];
	    }
	    var mid = (left + right) / 2;
	    var leftMss = this.mss(A, left, mid);
	    var rightMss = this.mss(A, mid + 1, right);
	    var leftSum = -99999999, rightSum = -99999999, sum = 0;
	    for (var i = mid; i < right; i++) {
	        sum = sum + A[i];
	        rightSum = Math.max(leftSum, max);
	    }
	    sum = 0;
	    for (var i = mid - 1; i > 0; i--) {
	        sum = sum + A[i];
	        leftSum = Math.max(leftSum, max);
	    }
	    return Math.max(leftMss, rightMss, leftSum + rightSum);
	}
};

