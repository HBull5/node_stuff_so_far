const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'about.html'), (err) => {
		if (err) {
			console.log(err);
		}
	});
});

router.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'contact.html'), (err) => {
		if (err) {
			console.log(err);
		}
	});
});

router.get('/contact/info', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'info.html'), (err) => {
		if (err) {
			console.log(err);
		}
	});
});

module.exports = router;
