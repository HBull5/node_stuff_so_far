const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function askQuit() {
	rl.question('Do you want quit?\n', (answer) => {
		if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
			rl.close();
		} else {
			askQuit();
		}
	});
}

// console.log('What is your name?');

// rl.on('line', (input) => {
// 	if (input.toLowerCase() === 'exit') {
// 		rl.close();
// 	} else {
// 		console.log(`Hello ${input}`);
// 		console.log('What is your name?');
// 	}
// });

// rl.on('close', () => {
// 	console.log('Goodbye!');
// });

rl.setPrompt('What is your age?');

rl.prompt();

rl.on('line', (age) => {
	console.log(`You are ${age} years old`);
});

rl.on('line', (input) => {
	console.log(input);
});
