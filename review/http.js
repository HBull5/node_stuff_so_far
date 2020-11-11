// add url parsing
const http = require('http');
const fs = require('fs');
const path = require('path');
const { rawListeners } = require('process');
const readline = require('readline');
const Events = require('events').EventEmitter;

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

class RestartEvent extends Events {}

const restartEvent = new RestartEvent();

restartEvent.on('restart', () => {
	server.listen(3000, () => {
		console.log('server restarted....');
		console.log('server running on port 3000...');
	});
});

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('home');
	} else if (req.url === '/about') {
		res.end('about');
	} else {
		fs.readFile(path.join(__dirname, '404.html'), 'utf-8', (err, data) => {
			res.end(data);
		});
	}
});

server.listen(3000, () => {
	console.log('server running on 3000....');
});

// rl.on('line', (input) => {
// 	if (input === 'exit') {
// 		console.log('Server stopped...');
// 		server.close((err) => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				rl.close();
// 			}
// 		});
// 	} else if (input === 'restart') {
// 		server.close((err) => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				restartEvent.emit('restart');
// 			}
// 		});
// 	}
// });
