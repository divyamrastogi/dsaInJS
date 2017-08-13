var Triangle = { 
 //param A : array of integers
 //param B : array of integers
 //param C : array of integers
 //param D : array of integers
 //return an integer
	solve : function(A, B, C, D) {
        // Compute Area of Rectangle
        var self = this;
        var rectanglePoints = this.computeArrayOfPoints(A, B);
        var areaOfRectangle = Math.round(this.computeRectangleArea(rectanglePoints));
        var count = 0;
        this.computeArrayOfPoints(C, D).forEach(function(P) {
            var onTheRectangle = false;
            var t1 = self.computeTriangleArea(
                P,
                rectanglePoints[0],
                rectanglePoints[1]
            );
            var t2 = self.computeTriangleArea(
                P,
                rectanglePoints[1],
                rectanglePoints[2]
            );
            var t3 = self.computeTriangleArea(
                P,
                rectanglePoints[2],
                rectanglePoints[3]
            );
            var t4 = self.computeTriangleArea(
                P,
                rectanglePoints[3],
                rectanglePoints[0]
            );
            if (t1 == 0 || t2 == 0 || t3 == 0 || t4 == 0) {
                onTheRectangle = true;
            }
            var totalArea = Math.round(t1 + t2 + t3 + t4);
            if (totalArea == areaOfRectangle && !onTheRectangle) {
                count++;
            }
        });
        return count;
	},
	computeArrayOfPoints: function(A, B) {
	    return A.map(function (point, index) {
	        return [A[index], B[index]];
	    });
	},
	computeLengthOfSide: function(P1, P) {
	    return Math.sqrt(Math.pow(P[1] - P1[1], 2) + Math.pow(P[0] - P1[0],  2));
	},
	computeRectangleArea: function(R) {
	   // Consists of four points [x1, y1], [x2, y2] ... [x4, y4]
	    return this.computeTriangleArea(R[0], R[1], R[2])
	        + this.computeTriangleArea(R[1], R[2], R[3]);
	},
    // Points are of the format [x, y]
	computeTriangleArea: function(P1, P2, P) {
	    var p1p, p2p, p1p2, s;
	    p1p = this.computeLengthOfSide(P1, P);
	    p2p = this.computeLengthOfSide(P2, P);
	    p1p2 = this.computeLengthOfSide(P1, P2);
	    s = (p1p + p2p + p1p2) / 2;
	    return Math.sqrt(s * (s - p1p) * (s - p2p) * (s - p1p2));
	}
};
