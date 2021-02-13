interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('fulltime')
  }
  workFullTime() {

  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('Parttime')
  }

  workPartTIme () {
     
  }
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 좋지 않음 🙅🏻‍♀️
function badPay(employee:Employee) {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee:T):T { // 제네릭에 조건을 걸어줄 수 있다. -> employee를 확장한 내용만 적용 가능하도록 제한을 걸어줌
  employee.pay();
  return employee
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTIme();
const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: 'ellie',
  age: 20
}

const obj2 = {
  animal: '🐕'
}

console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐕

function getValue<T, K extends keyof T>(obj:T, key: K): T[K] {
  return obj[key];
}