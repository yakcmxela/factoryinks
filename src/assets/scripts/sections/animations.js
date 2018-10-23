import $ from 'jquery';
import scrollTrigger from '../utilities/scrollTrigger';
import parallax from '../utilities/parallax';
import * as sections from '@shopify/theme-sections';

const animation = () => {
	let printAnim = $('.animation__blank-to-print');
	let inkAnim = $('.animation__ink-globs-image');
	let inkCont = $('.animation__ink-globs');
	$(window).on('scroll load', () => {
		scrollTrigger(printAnim, true, 50, 'animated');
		parallax(inkAnim, inkCont, 160);
	});
}

sections.register('animations', {
  onLoad: () => {
  	animation();
  }
});