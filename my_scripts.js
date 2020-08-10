// JavaScript source code
// Responsive Header
jQuery.noConflict();
var $ = jQuery;
$(function ($) {
	var header = $('header'),
	menuButton = $('.menu-button'),
	menu = $('header').find('nav'),
	headerHeight = header.outerHeight();

	menuButton.on('click', function (e) {
	e.preventDefault();
	var iconSpan = $(this).find('span'),
	classOn = iconSpan.data('onmenu'),
	classClose = iconSpan.data('closemenu');
	menu.toggleClass('on-menu');
	if (menu.hasClass('on-menu')) {
	iconSpan.removeClass(classOn).addClass(classClose);
	menuButton.addClass('closeIcon');
} else {
	iconSpan.addClass(classOn).removeClass(classClose);
	menu-button.removeClass('closeIcon');
}
e.stopPropagation()
});

$('body, html, header nav a').on ('click', function() {
menu.removeClass('on-menu');
});

menu.on('click', function(e) {
  e.stopPropagation();
});


anchorNav(headerHeight);
function anchorNav(headerHeight) {
	$('.anchor').on('click', function(e) {
		e.preventDefault();
		var ancla = $(this).attr('href');
		$('body,html').stop(true, true).animate({
			scrollTop: $(ancla).offset().top - headerHeight
			}, 350);
		});
	}
});