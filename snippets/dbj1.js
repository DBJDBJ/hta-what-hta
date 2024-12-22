
/*
DBJ*MicroPreter(tm)  -- Lightweight JavaScript Interpreter 
 -------------------------------------------------------- 
 (c) 2001-2006 by DBJSystems Ltd (mailto:dbj@dbj.org)
*/
//---------------------------------------------------------------------
//
//---------------------------------------------------------------------
var DBJ = new Object() ;
//---------------------------------------------------------------------
//
//---------------------------------------------------------------------
DBJ.center = function(oNode){
   var oParent=oNode.parentElement;
   oNode.style.left = oParent.offsetWidth/2 - oNode.offsetWidth/2;
}
//---------------------------------------------------------------------
//
//---------------------------------------------------------------------
DBJ.right = function (oNode){
   var oParent=oNode.parentElement;
   oNode.style.left = oParent.offsetWidth - oNode.offsetWidth ;
}
//---------------------------------------------------------------------
//
//---------------------------------------------------------------------
DBJ.left = function (oNode){
   var oParent=oNode.parentElement;
   oNode.style.left = 1 ;
}
//---------------------------------------------------------------------
//
//---------------------------------------------------------------------
DBJ.bottom = function (oNode){
   var oParent=oNode.parentElement;
   oNode.style.top = oParent.offsetHeight - oNode.offsetHeight - 1 ;
}
//---------------------------------------------------------------------
//
//---------------------------------------------------------------------
DBJ.top = function (oNode){
   var oParent=oNode.parentElement;
   oNode.style.top = 1 ;
}
//---------------------------------------------------------------------
//
//---------------------------------------------------------------------
DBJ.home = function ()
{
	
		var		the_root_ ;
		var		L = new String( window.location.href) ; 
				L = L.split("/") ;
		// gives an array like this : http:,,dbjnb,tipox_Local,Components,test_dbj.htm 
		the_root_ = L[0]+"//"+L[2]+"/"+L[3]+"/" ;
	
	return the_root_;
}
//---------------------------------------------------------------------
//
//---------------------------------------------------------------------
DBJ.IE = function () {
	return ((navigator.appVersion.indexOf("MSIE") > 0) && (parseInt(navigator.appVersion) >= 4)) ;
}
//---------------------------------------------------------------------
function test()
{
var img = document.createElement("IMG")
img.src = "C:\\Documents and Settings\\JovanovicD\\My Documents\\My Pictures\\person\\78150.JPG" ;
img.width= 50 ;
img.height= 50 ;
img.style.position = "absolute" ;
img.style.zindex = "99" ;
img.style.top = 10 ;
img.style.left = 10 ;
img = document.body.appendChild( img );
DBJ.bottom(img);
DBJ.right(img);
}
//---------------------------------------------------------------------
E = new Enumerator (document.getElementsByTagName("IMG")) ;
	while( ! E.atEnd())
	{
           var parent = E.item().parentElement ;
           parent.removeChild( E.item() ) ;
           E.moveNext() ;
	}
test() ;
/*
undefined
*/