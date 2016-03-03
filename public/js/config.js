/* eslint prefer-arrow-callback: 0 */

'use strict';

define('config', function () {
	requirejs.config({
		baseUrl: '/js',
		paths: {
			jquery: './jquery/src'
		},
		map: {
			'jquery/selector': {
				'jquery/selector-sizzle': 'jquery/selector-native'
			}
		}
	});
});
