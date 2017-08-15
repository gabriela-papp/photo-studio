$('.second_section h1').addClass('animated fadeInUp');

$('.next').click(function(){
	var current = $('.testimon-body.active');
	var next = current.next();
	current.removeClass('active');
	next.addClass('active');
});