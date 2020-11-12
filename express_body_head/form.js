const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const db = [
	{
		username: 'user123',
		password: 'sesame',
		hobbies: ['cars', 'computers', 'travel', 'food', 'airplanes']
	},
	{ username: 'dragonslayer9000', password: 'password' },
	{ username: 'admin', password: 'admin' }
];

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'form.html'), (err) => {
		if (err) {
			console.log(err);
		}
	});
});

app.get('/profile', (req, res) => {
	if (req.query.username === undefined) {
		res.sendFile(path.join(__dirname, 'form.html'), (err) => {
			if (err) {
				console.log(err);
			}
		});
	}

	let index;
	for (const user of db) {
		if (user.username === req.query.username) {
			index = db.indexOf(user);
		}
	}

	res.render('profile', {
		username: req.query.username,
		hobbies: db[index].hobbies
	});
});

app.post('/', (req, res) => {
	// validate the user, if incorrect username or password tell them that. if correct username and password show hello username
	const username = req.body.username;
	const password = req.body.password;

	for (const user of db) {
		if (user.username === username && user.password === password) {
			res.render('login', { username });
		}
	}

	res.sendFile(path.join(__dirname, 'form.html'), (err) => {
		if (err) {
			console.log(err);
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`);
});
