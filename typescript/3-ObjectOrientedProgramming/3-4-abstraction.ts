{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots:number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots:number): CoffeeCup;
    fillCoffeeBeans(beans:number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
      
    private static BEANS_GRAM_PER_SHOT:number = 7; // 클래스 외부에서는 보여주고싶지 않은 데이터라면 private 키워드를 이용한다.
    // Static? : 오브젝트마다 중복되어 사용되는 데이터들 -> 메모리 낭비를 막기 위해 static 키워드를 활용해 class level로 지정한다 (오브젝트를 새로 생성하지 않고도 이 데이터에 접근할 수 있다)
    coffeeBeans: number = 0; // instance(object) level

    private constructor(coffeeBeans: number) { 
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine { //static 키워드를 쓸때는 constructor를 private으로 지정하여 함부로 클래스 오브젝트를 생성하지 못하도록 제한하는게 안정적임(?)
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be grater than 0')
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...✅');
    }

    private grindBeans(shots: number) {
      console.log(`Grinding beans for ${shots}`)
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('value for beans should be grater than 0')
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up....🔥')
    }

    private extract(shots:number):CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    // Interface에 정의된 메서드들을 그대로 구현해야한다
    makeCoffee (shots:number):CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots)
      }
    }

    // const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
    // maker.fillCoffeeBeans(32);
    // maker.makeCoffee(2);

    // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(32);
    // maker2.makeCoffee(2);
    // maker2.clean();

    // maker2.fillCoffeeBeans(21) -> CoffeMaker 인터페이스에 정의되어있지 않으므로 이 메서드는 사용이 불가능함 
    // maker. //private 으로 지정된 메서드들은 접근이 불가능하다 (내부적으로만 사용)


    class AmateurUser {
      constructor (private machine: CoffeeMaker) {}
        makeCoffee () {
          const coffee = this.machine.makeCoffee(2);
          console.log(coffee);
          
        }
    }

    class ProBarista {
      constructor (private machine: CommercialCoffeeMaker) {}
      makeCoffee () {
        const coffee = this.machine.makeCoffee(2);
        console.log(coffee);
        this.machine.fillCoffeeBeans(45)
        this.machine.clean()
      }
    }

    const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker) // 인터페이스에 규약된 함수들만 접근 가능 -> abstraction
    const pro = new ProBarista(maker)
    pro.makeCoffee()
}