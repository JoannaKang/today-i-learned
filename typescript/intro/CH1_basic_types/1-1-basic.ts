{
  /**
  // Javascript type
  * Primitive :number, string, boolean, bigint, symbol, null, undefined
  * Object: function, array...
   */

  // 1. number
  const num: number = -6;

  // 2. string
  const str: string = 'hello'

  // 3. boolean
  const bool: boolean = false;

  // 4. undefined: 값이 비었는지 아닌지 아직 결정 안됨
  let age: number | undefined //undefined은 단독으로 쓰이는 걸 지양, optional type으로 선언
  age = 1
  // 함수에서 쓰이는 예시
  function find(): number | undefined {
    return undefined;
  }

  // 5. null: 비어있는 값 💩
  let person: null; 
  let person2: string | null; // null은 optional type으로 선언하는걸 권장

  // 6. unknown: 아직 타입이 결정되지 않는 경우 -> 💩 웬만하면 쓰지말기..
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // 7. any: 아무 타입이나 다 할당 가능한 경우 -> 💩 웬만하면 쓰지 말기
  let anything: any = 0;
  anything = 'hello'

  // 8. void: 함수가 아무것도 리턴하지 않는 경우
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined // 💩

  // 9. never: 아무것도 리턴하지 않는 경우 -> 에러만 던지던지 함수 내에 while문만 있는 경우?
  function throwError(message: string): never {
    throw new Error(message);
    // or
    // while(true) {
    // }
  }

  //10.obj: 오브젝트 안에 아무거나 다 담을수 있는 타입이므로 안쓰는게 좋음 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({name: 'ellie'})
}