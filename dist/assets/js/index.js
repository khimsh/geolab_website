$(document).ready(function(){

	function toggleNav() {
		$("#burger-icon").toggleClass('active');
		$('.main-nav').toggleClass('open');
	};

	// opens and closes mobile menu when burger-icon is clicked
	$('#burger-icon').click(toggleNav);

	// closes mobile menu when one of the main-nav__list__item is clicked
	$(".main-nav__list__item").click(toggleNav);
});
