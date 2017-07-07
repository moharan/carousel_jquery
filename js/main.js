$(document).ready(function() {
	//alert("existe");
	$("#botonera li").click(function(){
    	var carousel = $(this).attr("carousel");
    	console.log("carousel", carousel);
    	$("#slider ul li").css({"display":"none"});
    	$("#slider ul li:nth-child(" + carousel + ")").fadeIn();
    });
});
