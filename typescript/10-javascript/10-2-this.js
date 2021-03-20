console.log(this);

function simpleFunc() {
  console.log(this);
}

simpleFunc() // window 레벨에서 함수를 호출

class Counter {
  count = 0;
  // increase = function () {
  //   console.log(this);
  // }
  increase = () => { // arrow function으로 선언하면 this의 스코프가 유지됨,bind를 따로 사용하지 않아도!
    console.log(this);
  }
}

const counter = new Counter
counter.increase() // this === counter -> counter class 안에서 호출했으므로

// const caller = counter.increase; // increase의 포인터를 caller라는 새로운 변수로 변경
// caller() // this의 정보를 잃어버리게 되었으므로 undefine을 리턴

const caller = counter.increase.bind(counter) // this의 정보를 유지하려면 bind를 사용
caller() // this의 정보를 잃어버리게 되었으므로 undefine을 리턴

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run() // Bob