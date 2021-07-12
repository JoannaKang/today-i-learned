// 노드를 사용한 모듈 임포트
// const counter = require('./counter');

// counter.increase();
// counter.increase();
// counter.increase();
// counter.increase();
// counter.increase();
// console.log(counter.getCount())

// es6
// import { increase, getCount } from './counter.js'

// increase();
// increase();
// increase();
// increase();
// increase();

// console.log(getCount());

// or

import * as counter from './counter.js'

counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount());