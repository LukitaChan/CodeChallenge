const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	// define la route. En este caso por medio de EJS. (express.js).
	res.render('index.ejs', { titulo: 'Code Challenge' });
});

router.get('/LukitaChan', (req, res) => {
	//define la route (express.js)
	res.render('index.ejs', { titulo: 'Hola a Todos!' });
});

module.exports = router;
