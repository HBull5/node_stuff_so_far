const path = require('path');

// join
const myPath = path.join(__dirname, 'new_folder', 'hello.txt');
console.log(myPath);

// parse
console.log(path.parse(myPath));
