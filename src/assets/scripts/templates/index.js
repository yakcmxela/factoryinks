import '../sections/product';
import '../sections/animations';
import '../sections/hiw-steps';
import '../sections/music-player';
import '../sections/our-services';
import '../sections/testimonials';
import './customers/addresses';

import $ from 'jquery';
import * as sections from '@shopify/theme-sections';

$(document).ready(() => {
  sections.load([
  	'hiw-steps',
    'product',
    'animations',
    'header',
    'music-player',
    'our-services',
  ]);
});
