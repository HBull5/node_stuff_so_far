const assert = require('assert');
const foo = require('../types.js');

describe('Testing foo() function', () => {
	it('foo(true) should return "boolean"', () => {
		assert.strictEqual('boolean', foo(true));
	});

	it('foo(5) should return "number"', () => {
		assert.strictEqual('number', foo(5));
	});

	it('foo("5") should return "string"', () => {
		assert.strictEqual('string', foo('5'));
	});
});
