import $ from 'jquery';
import _ from 'lodash';
// el = element to add animated class
// reset = reset when scrolled out of view (bool)
// trigger = when to add class. percentage of element height (int) 
//           for example: 50 would be 50% of the elements height.
// class = class to add
const scrollTrigger = _.debounce( (el, reset, trigger, classes) => {
	if(!el.length) {
		return;
	}
	let pageLocationBottom = $(window).scrollTop() + $(window).innerHeight();
	let elTop = el.offset().top;
	let elHeight = el.innerHeight();
	let elBottom = elTop + elHeight;
	let elTrigger = (elHeight * (trigger / 100)) + elTop;

	if( pageLocationBottom >= elTrigger ) {
		el.addClass(classes);
	} else if( pageLocationBottom < elTrigger && reset == true) {
		el.removeClass(classes);
	}
}, 100);

export default scrollTrigger;