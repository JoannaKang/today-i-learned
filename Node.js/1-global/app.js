const fs = require('fs');

// Global object
console.assert(global);

global.hello = () => {
  console.log('hello')
}

global.hello();
hello();