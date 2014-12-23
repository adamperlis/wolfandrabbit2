var jumboHeight = $('.jumbotron').outerHeight();
var jumboHeight2 = $('.jumbotron2').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    
    if($(window).scrollTop() > 1000 ){
    	$(".bg-2").fadeIn("slow");
    	$(".bg-2").css('height', (1805 + jumboHeight2-scrolled) + 'px');
    } else{
		$(".bg-2").fadeOut('slow');
	}
}

$(window).scroll(function(e){
    parallax();

});