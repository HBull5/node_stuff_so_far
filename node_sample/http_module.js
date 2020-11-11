const http = require('http');
const PORT = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
	// const requestedURL = new URL(`http://localhost${req.url}`);
	// console.log(requestedURL);
	console.log(req.url);
	if (req.url === '/') {
		fs.access(path.join(__dirname, 'index.html'), fs.constants.F_OK, (err) => {
			if (err) {
				fs.appendFile(
					path.join(__dirname, 'index.html'),
					'<h1>Hello world</h1>',
					(err) => {
						if (err) {
							console.log(err);
						}
					}
				);
			} else {
				fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
					res.end(data);
				});
			}
		});
	} else {
		res.end("We don't have that page");
	}
});

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}....`);
});
