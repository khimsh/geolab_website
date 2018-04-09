$(document).ready(function(){
	$('#burger-icon').click(function(){
		$(this).toggleClass('active');
		$('.main-navigation').toggleClass('open');
	});
});