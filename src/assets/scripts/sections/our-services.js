import $ from 'jquery';
import parallax from '../utilities/parallax';
import * as sections from '@shopify/theme-sections';

const ourServices = () => {
	let el = $('.our-services__parallax_image');
	let container = $('.our-services');
	$(window).on('scroll', function() {
		parallax(el, container, 160);
	});
}

sections.register('our-services', {
  onLoad: () => {
  	ourServices();
	}
});
