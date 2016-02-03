/* eslint prefer-arrow-callback: 0 */

'use strict';

define('config', function () {
	requirejs.config({
		baseUrl: '/',
		paths: {
			sizzle: '/sizzle/dist/sizzle',
			ajax: '/jquery/src/ajax'
		},
		map: {
			'*': {
				'ajax': 'jquery/src/ajax'
			}
		}
	});
});
