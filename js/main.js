$(document).ready(function() {
	//alert("existe");
    function avanzar(){
        if(slider >=5){
            slider = 1;
        } else {
            slider++;
        }
        console.log("slider", slider);
        $("#slider ul li").css({"display":"none"});
        $("#slider ul li:nth-child(" + slider + ")").fadeIn();
        $("#botonera li").css({"color":"white"});
        $("#botonera li:nth-child(" + slider + ")").css({"color":"purple"});
    }
	var slider = 1;
	// funcionamiento al click
	$("#botonera li").click(function(){
    	var carousel = $(this).attr("carousel");
    	console.log("carousel", carousel);
    	$("#slider ul li").css({"display":"none"});
    	// solo se visualizara el slider con la misma posición
    	$("#slider ul li:nth-child(" + carousel + ")").fadeIn();
    	// estado de botonera cuando este seleccionada la misma imagen
    	$("#botonera li").css({"color":"white"});
    	// activa botonera
    	$(this).css({"color":"purple"});
    });
    $("#next01").click(function(){
    	if(slider <=1){
    		slider = 5;
    	} else {
    		slider--;
    	}
    	
    	console.log("slider", slider);
        $("#slider ul li").css({"display":"none"});
        $("#slider ul li:nth-child(" + slider + ")").fadeIn();
        $("#botonera li").css({"color":"white"});
        $("#botonera li:nth-child(" + slider + ")").css({"color":"purple"});
    });
    $("#next02").click(function(){
        //llamando a funcion
    	avanzar();
    });
    /*loop*/
    setInterval(function(){
        //llamando a funcion
        avanzar();
    },5000);
});
