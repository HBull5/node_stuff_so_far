var var1 = 'hello worl.,d';
module.exports = {
	foo: 'bar',
	name: 'Harcourt',
	age: 26,
	greet() {
		console.log(`hello my name is ${this.name}`);
	}
};

const obj = { name: 'harcourt', age: 26, gender: 'male' };
