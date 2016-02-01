/* globals initialState */

/* eslint no-var: 0 */
/* eslint prefer-arrow-callback: 0 */
/* eslint no-unused-vars: 0 */
'use strict';

require(['./config'], function () {
	require(['./router'], function (router) {
		var output = document.querySelector('#page');

		function navigateHandler(err, state) {
			console.log(err, state);
			output.textContent = state.name;
		}

		// Links
		// var as = document.querySelectorAll('a');
		// var links = Array.prototype.slice.call(as);

		// // Avoid normal behavior
		// links.forEach(a => {
		// 	a.addEventListener('click', event => {
		// 		event.preventDefault();
		// 		var ca = event.currentTarget;
		// 		router.navigate(ca.dataset.route, {}, {replace: true}, navigateHandler);
		// 	});
		// });

		// router listener
		function routeHandler(toState, fromState) {
			console.log(toState, fromState);
			navigateHandler(null, toState);
		}

		router.addRouteListener('home', routeHandler);
		router.addRouteListener('about', routeHandler);

		// init
		router.start(initialState, (erro, state) => {
			console.log(erro, state);
			if (erro) {
				console.error('router error', erro);
			}
		});
	});
});
