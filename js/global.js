$(document).ready(function(){
	//Buy tickets pop-up
	var windw = $(window), 
		welcome_height = $(".welcome-section").height(),
		tickets = $(".buy-tickets");


    windw.on("scroll", function () {
    	if(windw.scrollTop() >= welcome_height / 2){
    		tickets.addClass("up");

            $("#content #intro .one, .two").css({
                "opacity" : "1",
                "transform" : "translate(0px, 0px)"
            });
    	};
    	if(windw.scrollTop() == 0){
    		tickets.removeClass("up");
    	};	


	});
	
    //scroll page to content
	$(".explore-button").on("click", function(){	
		$("html, body").animate({ scrollTop: $("#content").offset().top + 10}, 200);

       // $(".sub-section").animate({})
	});
});