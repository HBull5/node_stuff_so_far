const math = require('../math.js');
const assert = require('assert');

// two methods describe & it
describe('Math function testing', () => {
	describe('Addition test', () => {
		it('Should return 4', () => {
			assert.strictEqual(4, math.add(2, 2));
		});

		it('math.add(3,3) should return 6', () => {
			assert.strictEqual(6, math.add(3, 4));
		});

		it('Should return 0', () => {
			assert.strictEqual(0, math.add(-2, 2));
		});
	});
});
