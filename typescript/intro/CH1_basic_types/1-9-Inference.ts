// *Type Inference

let text = 'hello'; // 타입이 뻔한 경우에는 타입스크립트가 자동으로 알아서 타입을 파악해 줌
function print(message: 'hello') {
  console.log(message);
}

function add(x:number, y: number):number {
  return x + y;
}

const result = add(1, 2); //타입이 알아서 숫자로 지정됨