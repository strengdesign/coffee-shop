$(function () {

	/* ==========================================================================
	   variables
	   ========================================================================== */
	var navContainer = $('.navigation');
	var mainNav = $('.main-nav');


	/* ==========================================================================
	   mobile navigation
	   ========================================================================== */
	navContainer.prepend('<span class="nav-icon" title="Menu"><span class="icon"></span> Menu</span>');
	mainNav.find('.menu').before('<span class="subnav-icon" title="Toggle">&nbsp;</span>');

	$('.nav-icon').click(function () {
		mainNav.toggleClass('active');
		$(this).toggleClass('active');
	});

	mainNav.find('.subnav-icon').click(function () {
		$(this).next('ul').slideToggle(250);
		$(this).toggleClass('active');
	});

});