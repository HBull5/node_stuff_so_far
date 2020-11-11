const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
	// We need to figure what they're asking for
	const requestedURL = new URL(`http://localhost:5000${req.url}`);
	const whiteList = ['/styles.css', '/app.js', '/favicon.ico'];

	// based on what path they asked for we need to send the appropriate page
	let file;
	switch (requestedURL.pathname) {
		case '/':
			file = 'index.html';
			break;
		case '/about':
			file = 'about.html';
			break;
		case '/contact':
			file = 'contact.html';
			break;
		default:
			if (whiteList.includes(requestedURL.pathname)) {
				file = requestedURL.pathname;
			} else {
				file = '404.html';
			}
			break;
	}

	// console.log(file);
	let contentType;
	switch (path.extname(file)) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.html':
			contentType = 'text/html';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.ico':
			contentType = 'image/vnd.microsoft.icon';
			break;
	}

	// We need send that file
	fs.readFile(path.join(__dirname, 'public', file), (err, data) => {
		if (err) {
			fs.appendFile(
				path.join(__dirname, 'error.txt'),
				`DATE:${Date.now()} ERROR:${err.message}\n`,
				(err) => {
					if (err) {
						console.log(err);
					}
				}
			);
			fs.readFile(
				path.join(__dirname, 'public', 'error.html'),
				'utf-8',
				(err, data) => {
					res.writeHead(500, { 'Content-Type': 'text/html' });
					res.end(data);
				}
			);
		} else {
			if (file === '404.html') {
				res.writeHead(404, { 'Content-Type': contentType });
				res.end(data);
			} else {
				res.writeHead(200, { 'Content-Type': contentType });
				res.end(data);
			}
		}
	});
});

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`);
});
