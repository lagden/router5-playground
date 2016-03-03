'use strict';

const express = require('express');
const path = require('path');

const isDev = (process.env.NODE_ENV || 'development') === 'development';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static('node_modules'));
app.use(express.static('public'));

app.get('*', (req, res) => {
	res.render('base', {locals: {isDev}});
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080...');
});
