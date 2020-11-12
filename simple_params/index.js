const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const fs = require('fs');
const model = JSON.parse(fs.readFileSync(path.join(__dirname, 'model', 'model.json'), { encoding: 'utf-8' }));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('login');
});

app.get('/register', (req, res) => {
	res.render('register');
});

app.get('/css/*', (req, res) => {
	res.sendFile(path.join(__dirname, req.url), err => {
		if (err) {
			console.log(err);
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`);
});
