import $ from 'jquery';
import * as sections from '@shopify/theme-sections';
import slick from 'slick-carousel';

const hiwSteps = () => {
	$('.hiw__slides').slick({
		nextArrow: '<a class="arrow next fa fa-arrow-right fa-2x"></a>',
		prevArrow: '<a class="arrow prev fa fa-arrow-left fa-2x"></a>',
		slidesToShow: 1,
		asNavFor: '.hiw__slides-images',
	  variableWidth: true
	});

	$('.hiw__slides-images').slick({
		arrows: false,
	});
}

sections.register('hiw-steps', {
  onLoad: () => {
  	hiwSteps();
  }
});