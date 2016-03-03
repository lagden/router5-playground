/* eslint no-var: 0 */
/* eslint prefer-arrow-callback: 0 */
/* eslint babel/object-shorthand: 0 */
'use strict';

define(['jquery/ajax', 'jquery/ajax/xhr'], function ($) {
	// Output
	var $out = $('#out');

	// Callback
	function cb(r) {
		$out[0].textContent = JSON.stringify(r);
	}

	// Test Ajax
	$.getJSON('http://randomuser.me/g/')
		.done(cb)
		.fail(cb)
		.always(function () {
			console.log('sempre!!!');
		});
});
