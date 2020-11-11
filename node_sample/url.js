const req1 = 'http://my-domain.com';
const req2 = 'http://my-domain.com/about';
const req3 = 'http://my-domain.com/about/info';
const req4 = 'http://my-domain.com/contact';
const req5 = 'http://my-domain.com/contact?page=3&theme=dark';

const myURL1 = new URL(req1);
const myURL2 = new URL(req2);
const myURL3 = new URL(req3);
const myURL4 = new URL(req4);
const myURL5 = new URL(req5);

// console.log(myURL3);
// console.log(myURL3.href);
// console.log(myURL3.host);
// console.log(myURL3.hostname);
// console.log(myURL3.pathname);

// console.log(myURL5.search.split('&'));

// {page: '3', theme = 'dark'};
// Vanilla JS review
let parsed = myURL5.search.replace('?', '');
parsed = parsed.split('&');
console.log(parsed);
const results = {};
for (const ele of parsed) {
	const index = ele.indexOf('=');
	results[ele.substring(0, index)] = ele.substring(index + 1, ele.length);
}
console.log(results.page);

console.log(myURL5.searchParams);
console.log(myURL5.searchParams.get('page'));
myURL5.searchParams.append('loggedIn', 'true');
console.log(myURL5.searchParams);
myURL5.searchParams.delete('loggedIn');
console.log(myURL5.searchParams);
myURL5.searchParams.append('page', '10');
console.log(myURL5.searchParams.get('page'));
console.log(myURL5.searchParams.getAll('page'));
myURL5.searchParams.set('page', 'bright');
console.log(myURL5.searchParams);
console.log(myURL5.searchParams.has('page'));
console.log(myURL5.searchParams.has('waffles'));
myURL5.searchParams.forEach((ele) => {
	console.log(ele);
});
