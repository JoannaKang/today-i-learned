## How to import packages🤔

1. Differect between require & import

- require: CommonJS feature

```
var foo = require("foo");
var bar = requre("foo").bar;
```

- import: ES6 feature

```
import foo from "foo";
import { bar } from "foo";

//*import entire module
import module
import module as myModule


//*import all properties from module
import * from module


//*import selected properties from module
import {moduleFunc, moduleFunc2} from module
```

2. Differect between module.export & exports

1) module.exports

```
//*When export
var template = { a: 'a', b: 'b' }
module.exports = template;
//or
module.exports = {
  a: 'a',
  b: 'b'
}
```

2. exports: 'export' is shortcut of 'module.exports', 'exports' refer 'module.exports'

```
var template = { a: 'a', b: 'b' }
exports.foo = template;
//or
exports.foo = {
  a: 'a',
  b: 'b' }
```

3. How to import: require() returns 'module.exports' when import module

```
var template = require('test.js');
console.log(template.a); // a
```

\*\*TLDR

- export, module.exports are pointing the same object
- However, differences are...
  - exports 는 property 방식으로 사용
  - module.exports 는 바로 사용가능
- Example

```
var template = { a: 'a', b: 'b'};
//*How to export
module.exports.foo = template; //(o)
module.exports = template; //(o)
module.exports = { a: 'a', b: 'b'} // (o)
exports.foo = template; //(o)
exports = template; //(x)
exports = { a: 'a', b: 'b'} // (x)
```
