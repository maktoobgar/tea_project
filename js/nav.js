// show nav
navbar = $('#navbar');
$('#nav-btn').click(() => {
	navbar.addClass('showNav');
});
// close nav
$('#nav-close').click(() => {
	navbar.removeClass('showNav');
});
