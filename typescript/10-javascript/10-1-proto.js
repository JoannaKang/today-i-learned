const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // true -> x, y는 동일한 프로토를 상속하고 있기 때문


const array = []
console.log(array) // array는 object를 상속하고 있어서 object에 선언된 메서드들을 쓸 수 있는것

function CoffeeMachine (beans) {
  this.beans = beans;
  // Instance member level
  // this.makeCoffee = shots => {
  //   console.log('making...☕️');
  // }
}

// prototype member level
CoffeeMachine.prototype.makeCofee = shots => {
  console.log('making...☕️');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1, machine2);

function LatteMachine (milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype) // CoffeeMachine의 prototype을 상속


const latteMachine = new LatteMachine(123)
console.log(latteMachine);