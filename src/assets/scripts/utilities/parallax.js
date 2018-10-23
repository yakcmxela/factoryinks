import $ from 'jquery';
// - zIndex used for variable speeds and direction -- Even goes up / Odd Down
// - Container to prevent run if elements outside of viewport
const parallax = function(el, container, throttle) {
	if(!el.length || !container.length) {
		return;
	}
	$.each(el, function() {
		let zIndex = parseInt($(this).css('z-index'));
		let pageBottom = $(window).scrollTop() + $(window).innerHeight();
		let start = $(container).offset().top;
		let stop = $(container).offset().top + $(container).innerHeight() + $(window).innerHeight();
		let transform = pageBottom * (zIndex / throttle);
		if(zIndex % 2 == 0) {
			transform = transform * -1;
		}

		if (pageBottom >= start && pageBottom <= stop) {
			$(this).css('transform', 'translateY(' + transform + '%)');
		}	
	});
};

export default parallax;