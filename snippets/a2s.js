
var a2s = function ( a, mid ) { 
    	mid = mid || "][" ;
    	return "[" + a.join(mid) + "]" ; 
    };

a2s([[1,2],[3,4]],"!");
/*
[1!2]
*/
/*
[1,2!3,4]
*/