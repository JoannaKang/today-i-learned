# 1. Export module?

- Export

```
export default function add (a, b) {
  return a + b;
}

export default (x) // 한 파일에서 두번 쓸 수 없음

export print () {
  console.log('print')
}
```

- Import

```
// -> export한 이름을 변경해서 import 가능
(기본 이름 세팅은 export default에 정의된 이름)
// export default 로 내보내진 함수는 {} 없이 임포트 할 수 있으나, export로 내보내진 함수는 {} 사용하여 임포트
import add, {print} from './module.js';

// 이름을 변경하고 싶다면? : as 를 활용하여 이름을 새로 설정
import add, {print as printMessage} from './module.js';
```

# 2. Export example

- Export

```
export default function add (a, b) {
  return a + b;
}

export print () {
  console.log('print')
}

export const number = 10; // 변수도 export 할 수 있다.
```

- Import

```
// module.js 파일 안에서 내보낸 모든 함수들을 한번에 caclulator라는 이름으로 불러온다
import * as calculator from './module.js' ;
console.log(calculator.add(1,2)); // object property 처럼 호출
calculator.print();
caculator.number;
```
