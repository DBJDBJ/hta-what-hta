;(function () {
        var print_buffer_ = (new Date()).toLocaleString() + "\n" ;

        printf = function (s) {
		   var ags =  [].slice.call( arguments );    
			 printf.target(ags.join("\n")) ;
		   return printf ;
		}
        var print_buffer_flush = function () { printf.element.innerText = print_buffer_ ; print_buffer_ = ""; return printf ;}
		printf.flush = print_buffer_flush ;
		printf.target = function (s_) { print_buffer_ += ("\n" + s_) ; }
           printf.element = document.body ;
           printf.flip = function (){ $(printf.element).fadeToggle(); }

}());

printf.element = ($("<div id='cons' style='position:absolute;bottom:5%;right:1%;z-index:22;width:50%;height:auto;background:silver;'></div>").appendTo(document.body), $("#cons")[0]) ;
printf(1,2,3)("ABRA")("CADABRA").flush();