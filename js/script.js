function testWebP(callback) {
    var webP = new Image();
    webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = webP.onerror = function() {
        typeof callback === 'function' && callback(webP.height === 2);
    };
};
testWebP(function(supported) {
    console.log(supported);
});;

$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.header__menu, .burger__line').toggleClass('active');
		$('body').toggleClass('lock');
	});
});;

window.onscroll = function showHeader () {
	let nav = document.querySelector('.header');
	
	if (window.pageYOffset > 200) {
		nav.classList.add('active')
	} else {
		nav.classList.remove('active')
	}
};