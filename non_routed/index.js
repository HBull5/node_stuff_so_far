// requiring in express module (external) must install express first *always the same*
const express = require('express');
// initializing express *always the same*
const app = express();
// requiring path (built-in) module
const path = require('path');
// Define a port should try to find a environment PORT if that doesn't exist (undefined) then will default to 3000
const PORT = process.env.PORT || 3000;

// This allows us to serve .js .css and additional necessary files located in the public folder (static is the other popular naming convention)
app.use(express.static(path.join(__dirname, 'public')));

// Routing of requests app.something('/somepath', (req, res) => {})

//? If a GET request is made to '/'
app.get('/', (req, res) => {
	res.status(200);
	res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
		if (err) {
			console.log(err);
		}
	});
});

//? if a GET request is made to '/about'
app.get('/about', (req, res) => {
	res.status(200);
	res.sendFile(path.join(__dirname, 'public', 'about.html'), (err) => {
		if (err) {
			console.log(err);
		}
	});
});

app.get('/about/contact', (req, res) => {
	// we want send the contact.html page
	res.sendFile(path.join(__dirname, 'public', 'contact.html'), (err) => {
		if (err) {
			console.log(err);
		}
	});
});

app.get('/api', (req, res) => {
	res.json({ api: 'this is an api response' });
});

//? if a GET request is made to '/api/joke'
app.get('/api/joke', (req, res) => {
	res.status(200);
	res.json({ joke: 'How many people does it take to put in a lightbulb' });
});

// What port should the server listen to
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}...`);
});
