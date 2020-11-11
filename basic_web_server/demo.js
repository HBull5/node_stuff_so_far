const arr = ['apples', 'bananas', 'oranges'];

arr.pop();
arr.pop();
arr.pop();

console.log(arr);

const me = {
	name: 'harcourt',
	age: 26
};

me.name = undefined;

console.log(me);

delete me.name;

console.log(me);

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class Employee extends Person {}

const person1 = new Person('harcourt', 26);

console.log(person1 instanceof Person);
console.log(person1 instanceof Employee);
