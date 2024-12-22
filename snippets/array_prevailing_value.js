var rndm = function (min,max) {	return Math.floor(Math.random()*(max-min+1)+min);  } ,
generator = function ( len,min,max ){  var ar = []; while (len--) ar.push(rndm(min, max)); return ar; } ;

var ca= generator(10,1,10); 
var idx = {};

/*
  index from this:  ["apple","banana","apple","orange","banana","apple"];
  produces this:  {"apple":[0,2,5] , "banana":[1,4] , "orange":[3]}
*/
for(var i=0;i< ca.length;i++)
{
  var key = ca[i];
  if (idx[key] == undefined ) {
        idx[key] = [i] ;
   } else {
        idx[key].push(i);
   }
};
s = ["{"] ;
for ( var k in idx )
{ 
   s.push( "  " + k + "\t: [" + idx[k] + "]");
}
s.push("}");
s.join("\n");
/*
{
  1	: [2,3]
  2	: [8]
  3	: [0]
  4	: [5,9]
  6	: [4]
  7	: [1]
  9	: [6,7]
}
*/