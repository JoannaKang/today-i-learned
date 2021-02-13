{
  interface Either<L, R>{
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left(): L { // 제네릭으로 임의의 타입을 받을 수 있음
      return this.leftValue;
    }
    right(): R {
      return this.rightValue
    }
  }

  const either: Either<number, number> = new SimpleEither(4, 5);
  either.left();
  either.right();
  const best = new SimpleEither({name: 'ellie'}, 'hello')
  console.log(either.left())
  console.log(best)
}