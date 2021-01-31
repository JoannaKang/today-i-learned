{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }
  
  class CoffeeMachine {
      
    static BEANS_GRAM_PER_SHOT:number = 7; 
    // Static? : 오브젝트마다 중복되어 사용되는 데이터들 -> 메모리 낭비를 막기 위해 static 키워드를 활용해 class level로 지정한다 (오브젝트를 새로 생성하지 않고도 이 데이터에 접근할 수 있다)
    coffeeBeans: number = 0; // instance(object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    makeCoffee (shots:number):CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) { //this 대신 class명을 사용한다
        throw new Error ('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk:false
      };
      }
    }

  const maker = new CoffeeMachine(32);
  console.log(maker)
  console.log(maker.makeCoffee(2))
  //CoffeeMachine.makeCoffee(2) // static 키워드로 선언되지 않은 메서드는 인스턴스 선언 없이 호출할 수 없음
  const maker2 = CoffeeMachine.makeMachine(3) // makeMachine은 static으로 선언되었으므로 별도 인스턴스 생성하지 않고도 외부에서 접근 가능
  console.log('🥫',maker2)
}