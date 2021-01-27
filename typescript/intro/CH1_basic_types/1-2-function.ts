{
  // // Javascript 💩
  // function jsAdd (num1, num2){
  //   return num1 + num2
  // }

  // // Typescript 💫
  // function jsAdd2(num1:number, num2:number):number {
  //   return num1 + num2
  // }

  // // Javascript 💩
  // function fetchNum(id) {
  //   // code...
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100)
  //   });
  // }

  function fetchNum2(id: string):Promise<number> { // string 파라미터를 받아서 숫자를 리턴하는 프로미스를 리턴
    // code...
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100)
    });
  }

  // Optional parameter
  function printName(firstName:string, lastName? : string) { //? 로 표기된 항목은 꼭 전달하지 않아도 무방
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Anna', undefined); // optional parameter인 경우 꼭 Undefine이라고 명시해주지 않아도 됨

  // Defalut parameter
  function printMessage(message:string ='default message') { //기본값을 설정할 수 있다
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]):number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1,2)) //...표기가 아규먼트들을 어레이 형태로 변환해서 넣어주는것처럼 동작
  console.log(addNumbers(1,2,3,4,5));
  console.log(addNumbers(1,2,3,4,5,6,0));

}