const { EventEmitter } = require('events');
const Events = require('events').EventEmitter;

class MyEmitter extends Events {}

const myEmitter = new MyEmitter();

myEmitter.on('duck', () => {
	console.log('quack');
});

myEmitter.once('dog', () => {
	console.log('woof');
});

myEmitter.emit('duck');
myEmitter.emit('duck');
myEmitter.emit('duck');
myEmitter.emit('duck');
myEmitter.emit('duck');
myEmitter.emit('duck');
myEmitter.emit('duck');
myEmitter.emit('duck');
myEmitter.emit('duck');

myEmitter.emit('dog');
myEmitter.emit('dog');
myEmitter.emit('dog');
myEmitter.emit('dog');
myEmitter.emit('dog');
myEmitter.emit('dog');
myEmitter.emit('dog');
myEmitter.emit('dog');
