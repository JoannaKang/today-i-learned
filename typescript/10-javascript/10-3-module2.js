// import add from './10-3-module.js';
// import {print as printMessage} from './10-3-module.js'; // 이름을 변경해서 사용하고 싶다면

// console.log(add(1, 2))
// printMessage();

// 한번에 임포트하기
import * as calculator from './10-3-module.js'
console.log(calculator.add(1,2));
calculator.print();
console.log(calculator.number);
