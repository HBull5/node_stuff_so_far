const fs = require('fs');
const path = require('path');
// const readline = require('readline');

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// mkdir
// fs.mkdir(path.join(__dirname, 'cool_folder'), {}, (err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('Folder created...');
// 	}
// });

// rl.on('line', (input) => {
// 	if (input.includes('mkdir')) {
// 		const folder = input.split(' ')[1];
// 		fs.access(path.join(__dirname, folder), fs.constants.F_OK, (err) => {
// 			if (err) {
// 				if (err.errno === -4058) {
// 					fs.mkdir(path.join(__dirname, folder), {}, (err) => {
// 						if (err) {
// 							console.log(err);
// 						} else {
// 							console.log('Folder created...');
// 						}
// 					});
// 				}
// 			} else {
// 				console.log('Folder already created...');
// 			}
// 		});
// 	} else if (input === 'exit') {
// 		rl.close();
// 	}
// });

// rl.on('close', () => {
// 	console.log('Goodbye!');
// });

// appendFile
fs.appendFile(
	path.join(__dirname, 'cool_folder', 'new_folder', 'app.js'),
	`console.log('hello from node.js')`,
	(err) => {
		if (err) {
			if (err.errno === -4058) {
				fs.mkdir(
					path.join(__dirname, 'cool_folder', 'new_folder'),
					{},
					(err) => {
						if (err) {
							console.log(err);
						} else {
							fs.appendFile(
								path.join(__dirname, 'cool_folder', 'new_folder', 'app.js'),
								`console.log('hello form node.js');`,
								(err) => {
									if (err) {
										console.log(err);
									}
								}
							);
						}
					}
				);
			}
		}
	}
);

// readFile
fs.readFile(
	path.join(__dirname, 'cool_folder', 'new_folder', 'app.js'),
	'utf-8',
	(err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	}
);
