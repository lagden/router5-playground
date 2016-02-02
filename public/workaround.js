/* eslint no-var: 0 */
/* eslint prefer-arrow-callback: 0 */
'use strict';

define([], function () {
	function linksBehavior(router) {
		function navigateHandler(event) {
			event.preventDefault();
			var ca = event.currentTarget;
			router.navigate(ca.dataset.route, {}, {replace: true});
		}
		var links = document.querySelectorAll('a');
		Array.prototype.slice.call(links).forEach(function (a) {
			a.addEventListener('click', navigateHandler, false);
		});
	}
	return linksBehavior;
});
