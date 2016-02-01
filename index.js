'use strict';

const express = require('express');
const path = require('path');
const router = require('./universal/router');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static('node_modules'));
app.use(express.static('universal'));
app.use(express.static('public'));

app.get('*', (req, res) => {
	router.start(req.originalUrl, (error, state) => {
		if (error) {
			res.status(500).send(error);
		} else {
			res.render('base', {
				initialState: JSON.stringify(state)
			});
		}
		router.stop();
	});
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080...');
});
