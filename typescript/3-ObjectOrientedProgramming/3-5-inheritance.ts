{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots:number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
      
    private static BEANS_GRAM_PER_SHOT:number = 7; 
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) { 
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
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
      console.log(`Pulling ${shots} shots...☕️`)
      return {
        shots,
        hasMilk:false
      }
    }

    // Interface에 정의된 메서드들을 그대로 구현해야한다
    makeCoffee (shots:number):CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots)
      }
  }

  class CaffeLatteMachine extends CoffeeMachine {

    constructor (beans: number, public readonly serialNumber: string) { // 자식 클래스에서 생성자를 따로 구현하는 경우
      super(beans); // 부모 클래스의 필수 파라미터를 super 키워드를 활용해 전댈해줘야한다
    }

    private steamMilk(): void { // 상속된 클래스에서만 쓰이는 메서드
      console.log('steaming some milk...🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots) // super로 부모의 메서드를 호출한다
      this.steamMilk();
      return {
        ...coffee, // 부모 클래스의 내용을 받아오고
        hasMilk: true // hasMilk 값만 바꿔준다
      }
    }
  }

  const machine = new CoffeeMachine(23);
  const lattemachine = new CaffeLatteMachine(23, 'SSSS');  
  const coffee = lattemachine.makeCoffee(1)
  console.log(coffee)
  console.log(lattemachine.serialNumber)
}