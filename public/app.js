/* globals initialState */

/* eslint no-var: 0 */
/* eslint prefer-arrow-callback: 0 */
/* eslint no-unused-vars: 0 */
'use strict';

require(['./config'], function () {
	require(['./router'], function (router) {
		var output = document.querySelector('#page');

		function routeHandler(toState, fromState) {
			output.textContent = toState.name;
			console.debug('>>>', toState.name);
		}

		router.addRouteListener('home', routeHandler);
		router.addRouteListener('about', routeHandler);

		// init
		router.start(initialState, function (erro, state) {
			if (erro) {
				console.error('router error', erro);
			}
		});
	});
});
