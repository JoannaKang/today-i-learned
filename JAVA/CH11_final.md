# 1. final 제어자

- final 제어자는 필드, 지역변수, 메서드, 클래스앞에 위치할 수 있다

(1) Final 변수

- 최초 선언된 이후, 한번 대입된 값을 수정할 수 없다.

  ```
  class A3 {
    int a = 3;
    final int b = 5;
    A3() {
      a = 7;
      // b = 9; => 이건 불가능
    }
  }
  ```

- 언제 사용할까?
  - final로 선언된 필드값은 상수 영역에 해당 값이 복사된다.
  - 어떤 필요에 따라 복사본을 하나 만들어 놓음으로써 원본이 삭제된 이후에도 그 값을 활용할 수 있도록 하는 것이 fina변수의 기능

(2) final 메서드 / 클래스

- 메서드를 final 메서드로 정의하는 경우 자식 클래스에서 해당 메서드를 오버라이딩 할 수 없다.
- Final 클래스는 최종 클래스의 의미로 더 이상 자식 클래스가 없다는 것을 의미하믏 상속 자체가 아예 불가능하다

> Summary

- final 변수 : 값 변경 불가능
- final 메서드 : 오버라이딩 불가능
- final 클래스 : 상속 불가능

# 2. Abstract 제어자

- Abstract가 제어자가 붙은 경우 추상 메서드 / 추상 클래스가 됨
- 추상메서드 : 기능 자체가 정의되지 않은 메서드로서 중괄호가 없는 메서드이며 세미콜론으로 끝남

  ```
  abstract 리턴 타입 메서드명 ();
  ```

- 추상클래스: 추상 메서드를 1개 이상 포함하고 있는 클래스

  ```
  abstract class Animal {
    abstract void cry(); // -> 추상메서드
  }

  class Cat extends Animal {
    void cry() {
      System.out.println("meow");
    }
  }

  public class AbstractModifier_2 {
    public static void main(String[] args) {
      Animal animal1 = new Cat();

      animal1.cry(); // -> "meow" 출력
    }
  }
  ```

  - Abstract 제어자의 장점
    - 추상 클래스를 상속하면 추상 메서드도 내려받는다.
    - 클래스 내부에 추상 메서드가 하나라도 있는 경우, 해당 클래스는 추상 메서드를 일반 메서드로 오버라이딩 하거나 자신을 추상 클래스로 정의해야 한다.

# 연습문제

Q1. b = 9 ; //=> final 변수를 다시 할당하는게 불가능
Q2. final void bcd() // -> final 메서드를 다시 할당하는게 불가능
Q3. 04에서 에러 발생, final 클래스는 상속이 불가능
