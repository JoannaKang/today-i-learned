{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  // public: 클래스 외부에서 접근 가능 (기본 세팅은 퍼블릭)
  // private: 클래스 안에서만 접근 가능하도록 숨김처리
  // protected: 상속한 클래스에서만 접근 가능하도록 숨김처리
  
  class CoffeeMachine {
      
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

  //CoffeeMachine.makeCoffee(2) // static 키워드로 선언되지 않은 메서드는 인스턴스 선언 없이 호출할 수 없음
  const maker2 = CoffeeMachine.makeMachine(3) // makeMachine은 static으로 선언되었으므로 별도 인스턴스 생성하지 않고도 외부에서 접근 가능

  // const maker = new CoffeeMachine(32); //Constructor를 private으로 지정하면 이렇게 인스턴스를 생성할 수 없다
  // console.log(CoffeeMachine.BEANS_GRAM_PER_SHOT) //BEANS_GRAM_PER_SHOT이 private이므로 외부에서 직접 접근은 불가능
  const maker = CoffeeMachine.makeMachine(32) //makeMachine이라는 static method를 통해서 CoffeeMachine을 생성할 수 있음
  maker.fillCoffeeBeans(30) // 이렇게 접근해야 함

  class User {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`
    }
  }
  const user = new User('Steve', 'Jobs')
}