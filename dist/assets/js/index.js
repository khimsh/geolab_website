$(document).ready(function(){

	function toggleNav() {
		$("#burger-icon").toggleClass('active');
		$('.main-navigation').toggleClass('open');
		$('.header__logo-img').toggleClass('header__logo-img--active');
	};

	// opens and closes mobile menu when burger-icon is clicked
	$('#burger-icon').click(toggleNav);

	// closes mobile menu when one of the nav-links is clicked
	$(".nav-link").click(toggleNav);
});
