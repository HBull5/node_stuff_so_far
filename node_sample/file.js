const fs = require('fs');
const path = require('path');
const accessible = fs.constants.F_OK;

// fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
// 	if (err) {
// 		console.log(err.message);
// 	} else {
// 		console.log(data);
// 	}
// });

// fs.rename(
// 	path.join(__dirname, 'text.txt'),
// 	path.join(__dirname, 'hello.txt'),
// 	(err) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 	}
// );

// console.log(fs.constants.F_OK); // accessible
// console.log(fs.constants.W_OK); // writeable
// console.log(fs.constants.R_OK); // readable

// fs.access(path.join(__dirname, 'text.txt'), fs.constants.F_OK, (err) => {
// 	if (err) {
// 		fs.access(path.join(__dirname, 'hello.txt'), fs.constants.F_OK, (err) => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				fs.rename(
// 					path.join(__dirname, 'hello.txt'),
// 					path.join(__dirname, 'text.txt'),
// 					(err) => {
// 						console.log(err);
// 					}
// 				);
// 			}
// 		});
// 	} else {
// 		fs.rename(
// 			path.join(__dirname, 'text.txt'),
// 			path.join(__dirname, 'hello.txt'),
// 			(err) => {
// 				if (err) {
// 					console.log(err);
// 				}
// 			}
// 		);
// 	}
// });

fs.access(path.join(__dirname, 'text.txt'), fs.constants.X_OK, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('yay');
	}
});
