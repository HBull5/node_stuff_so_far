const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.json({ api: 'this is an api response' });
});

router.get('/joke', (req, res) => {
	res.json({ api: 'this is a joke' });
});

module.exports = router;
