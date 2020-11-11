const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200);
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'), (err) => {
		if (err) {
			console.log(err);
		}
	});
});

module.exports = router;
