/* globals initialState */

/* eslint no-var: 0 */
/* eslint prefer-arrow-callback: 0 */
/* eslint no-unused-vars: 0 */
'use strict';

require(['./config'], function () {
	require(['./router', './workaround'], function (router, linksBehavior) {
		var output = document.querySelector('#page');

		// router listener
		function routeHandler(toState, fromState) {
			output.textContent = toState.name;
			console.debug('>>>', toState.name);
		}

		// -----> workaround <-----
		linksBehavior(router);

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
