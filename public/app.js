/* globals initialState */

/* eslint no-var: 0 */
/* eslint prefer-arrow-callback: 0 */
/* eslint no-unused-vars: 0 */
'use strict';

require(['./config'], function () {
	require(['ajax'], function ($) {
		console.log('test ajax');
		console.dir($.getJSON);
		$.getJSON('http://randomuser.me/g/', {seed: 'awesome'}, console.log);
	});
});
