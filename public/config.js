/* eslint prefer-arrow-callback: 0 */

'use strict';

define('config', function () {
	requirejs.config({
		baseUrl: '/',
		paths: {
			sizzle: '/sizzle/dist/sizzle',
			jquery: '/jquery/src'
		}
	});
});
