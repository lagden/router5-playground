/* eslint prefer-arrow-callback: 0 */

'use strict';

define('config', function () {
	requirejs.config({
		baseUrl: '/',
		paths: {
			router5: '/router5/dist/amd/router5',
			router5HistoryPlugin: '/router5-history/dist/amd/router5-history',
			router5ListenersPlugin: '/router5-listeners/dist/amd/router5-listeners',
			router5LinkInterceptorPlugin: '/router5-link-interceptor/amd/index'
		}
	});
});
