{
  function checkNotNullAnyBad(arg: number | null): number { //  💩
    if (arg == null) {
      throw new Error('not valid number')
    }
    return arg;
  }

  // how to use generic
  function checkNotNull<T>(arg: T | null ): T { // T:어떤 타입이든 될 수 있음, any를 쓰지 않으면서 타입을 보장할 수 있는 방법
    if (arg == null) {
      throw new Error('not valid number')
    }
    return arg;
  }
  const number = checkNotNull(123)
  const boal:boolean = checkNotNull(true) // 컴파일 시간대에
  console.log(result)
}