{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar? : boolean;
  }

// 공통적으로 사용되는 메서드들은 별도 클래스로 분리해서 다른 클래스에 주입해준다 ex-우유 스팀, 설탕 주입 

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarSource {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Fancy!!!! Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class AutomaticSugarMixer implements SugarSource {
    addSugar(cuppa: CoffeeCup): CoffeeCup {
      console.log(`Adding sugar...`);
      return {
        ...cuppa,
        hasSugar: true,
      };
    }
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
    constructor (
      beans: number,
      public readonly serialNumber: string,
      private milkFother: CheapMilkSteamer //dependency injection
      ) { 
      super(beans); 
    }

 
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // super로 부모의 메서드를 호출한다
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) { //dependency injection  -> composition
      super(beans) // 원본 클래스의 파라미터는 super를 이용해 호출
    }
    makeCoffee(shots:number): CoffeeCup {
      const coffee = super.makeCoffee(shots)
      return this.sugar.addSugar(coffee)
    }    
  }

  class SweetCafeeLateMachine extends CoffeeMachine {
    constructor (
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans)
    }
    makeCoffee(shots:number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee)
      return this.milk.makeMilk(sugarAdded)
    }
  }
}