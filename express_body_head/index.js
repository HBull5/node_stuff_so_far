const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const users = [
	{ id: 1, name: 'harcourt' },
	{ id: 2, name: 'jessica' },
	{ id: 3, name: 'vinny' },
	{ id: 4, name: 'ellie' }
];

const memberships = ['bronze', 'silver', 'gold'];

function getProfile(req, res, next) {
	if (req.url.includes('/profile')) {
		let username;
		let membershipLvl;
		for (const user of users) {
			if (user.id === parseInt(req.params.id)) {
				username = user.name;
			}
		}

		if (memberships.includes(req.params.membership)) {
			membershipLvl = req.params.membership;
		} else {
			next();
			res.end(`Invalid membership`);
		}

		if (username === undefined) {
			next();
			res.end(`<h1>We don't have any users with that profile</h1>`);
		} else {
			next();
			res.end(`<h1>This is ${username}'s profile</h1>
            <h1>They have a ${req.params.membership} level membership</h1>`);
		}
	} else {
		next();
	}
}

app.get('/profile/:id', getProfile, (req, res) => {
	if (req.url.includes('/profile')) {
		let username;
		for (const user of users) {
			if (user.id === parseInt(req.params.id)) {
				username = user.name;
			}
		}

		if (username === undefined) {
			res.end(`<h1>We don't have any users with that profile</h1>`);
		} else {
			res.end(`<h1>This is ${username}'s profile</h1>`);
		}
	}
});

app.get('/profile/:id/:membership', getProfile, (req, res) => {});

app.get('/test', getProfile, (req, res) => {
	console.log(req.query);
	res.end();
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`);
});
