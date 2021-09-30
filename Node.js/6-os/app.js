const os = require('os');
// 사용중인 운영체제의 정보를 알 수 있다.
console.log(os.EOL === '\n');
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
