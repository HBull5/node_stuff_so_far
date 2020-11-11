const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// console.log('Hello what is your name?');

// rl.on('line', (response) => {
// 	if (response === 'exit') {
// 		rl.close();
// 	} else {
// 		console.log(`Hello nice to meet you ${response}`);
// 	}
// });

// rl.on('close', () => {
// 	console.log('Goodbye!');
// });

const EventEmitter = require('events');

class MyEvent extends EventEmitter {}

const myEmitter = new MyEvent();

myEmitter.on('wave', () => {
	console.log('HELLO!!!!!!!!!!!!!!!');
});

myEmitter.once('middle_finger', () => {
	console.log('back at ya');
});

// rl.on('line', (input) => {
// 	if (input === 'hello') {
// 		myEmitter.emit('wave');
// 	} else if (input === 'exit') {
// 		rl.close();
// 	} else {
// 		console.log('Valid commands: "hello" & "exit');
// 	}
// });

myEmitter.emit('wave');
myEmitter.emit('wave');
myEmitter.emit('middle_finger');
myEmitter.emit('middle_finger');
