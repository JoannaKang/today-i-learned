{
  // *Type Assertion: 타입을 강요해야 할때 💩
  function jsStrFunc():any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 함수가 리턴하는 값의 타입을 정확하게 알 수 있을 때 as를 이용해 타입을 지정해준다 -> 타입을 지정해주고 나면 해당 타입에 관한 메서드들을 쓸 수 있다
  console.log(((<string>result).length));

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //🙅🏻‍♀️

  function findNumbers(): number[] | undefined {
    return undefined
  }
  const numbers =findNumbers();
  numbers!.push(2) //!를 붙이면 이 값은 무조건 존재한다고 확신할 수 있는 경우 (null 아님)

  // More example
  const button = document.querySelector('class')!; //-> 무조건 노드값이 있다고 확신할 때
  if(button) {
    button.nodeValue
  }
}