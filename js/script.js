let hamburger = document.querySelector('.hamburger'),
	line1 = document.querySelector('.line1'),
	line2 = document.querySelector('.line2'),
	line3 = document.querySelector('.line3'),	
	body = document.querySelector('body'),
	mobileMenu = document.querySelector('.mobile-menu');	

function burgerAnim() {
	line1.classList.toggle('line1_active');
	line2.classList.toggle('line2_active');
	line3.classList.toggle('line3_active');
	mobileMenu.classList.toggle('mobile-menu_hidden');
	body.classList.toggle('scroll_block');
	hamburger.classList.toggle('burg');
}
hamburger.addEventListener('click', burgerAnim);

