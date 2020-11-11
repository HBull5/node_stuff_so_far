console.log(__filename);
console.log(__dirname);

const path = require('path');

console.log(path.basename(__dirname));

console.log(path.parse(__filename));

console.log(path.join('C:', 'Users', 'hbull', 'Desktop'));
