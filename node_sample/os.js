const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(Math.floor(os.freemem() / 1000000000));
console.log(Math.floor(os.totalmem() / 1000000000));
console.log(os.homedir());
console.log(os.uptime());
