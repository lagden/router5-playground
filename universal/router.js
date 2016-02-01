/* eslint prefer-arrow-callback: 0 */
/* eslint no-var: 0 */
/* eslint no-unused-vars: 0 */
/* eslint prefer-reflect: 0 */
'use strict';

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([
			'router5',
			'router5HistoryPlugin',
			'router5ListenersPlugin'
		], factory);
	} else {
		module.exports = factory(
			require('router5'),
			require('router5-history'),
			require('router5-listeners')
		);
	}
})(this, function (router5, historyPlugin, listenersPlugin) {
	var router = new router5.default()
		.setOption('useHash', false)
		.setOption('trailingSlash', true)
		.setOption('defaultRoute', '404')
		// Plugins
		.usePlugin(historyPlugin())
		.usePlugin(listenersPlugin())
		// Routes
		.addNode('home', '/home')
		.addNode('about', '/about')
		.addNode('404', '/404');

	return router;
});
