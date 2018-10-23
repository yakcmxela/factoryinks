import $ from 'jquery';
import scrollTrigger from '../utilities/scrollTrigger';
import * as sections from '@shopify/theme-sections';

let headerImg = $('.template-index .site-header__background-image');

const dropHeader = () => {
	if(!headerImg.length) {
		return;
	}
	$(window).on('load scroll', () => {
		let height = headerImg.innerHeight();
		let trigger = $('.hero').innerHeight() - height;
		if($(window).scrollTop() >= trigger) {
			headerImg.addClass('active');
		} else {
			headerImg.removeClass('active');
		}
	});
}

const openNav = () => {
	$('#nav-toggle').on('click', () => {
		$('body').toggleClass('nav-open');
		$('.site-header__background-image').toggleClass('force-active');
	});
}

const submenus = () => {
	$( '#ocn' ).on( 'click', '.ocn__submenu-toggle', (evt) => {
		$('.ocn__menu li').not($(evt.target).parent()).removeClass('active');
		$(evt.target).parent().toggleClass('active');
	});
};

$(document).ready(() => {
  dropHeader();
  openNav();
  submenus();
});