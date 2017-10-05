$(function() {
	   $("#common-footer").load("footer.html");
	   $("header .fa-search").on("click",function(){
	   	    $(".seacher").css({"display":"block"})
	   })
	   $(".cancelseracher").on("click",function(){
	   	    $(".seacher").css({"display":"none"})
	   })
})