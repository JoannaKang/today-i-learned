# 1. 추상클래스

- 메서드의 본체가 완성되지 않은 미완성 메서드

  ```
  abstract class A {
    abstract void abc(); // 중괄호가 없다면 아무런 기능이 없는 메서드로서 정의된 추상 메서드
    void bcd() {

    }
  };
  ```

- 추상 클래스 자체로는 직접 객체를 생성할 수 없지만 자식 클래스를 생성해 객체를 생성하고 부모 클래스인 추상 클래스 타입으로 선언할 수 있다.

```
 abstarct class A {
   abstract void abc();
 }

// A a = new A(); => 이건 안 됨

 class B extends A {
   void abc() {
     // 이건 가능
   }
 }
```

- 익명 이너 클래스 사용하기
  - 컴파일러가 내부적으로 추상 클래스를 상속해 메서드 오버라이딩을 수행한 클래스를 생성하고 그 클래스로 객체를 생성하는 방법

# 2. 인터페이스

- 인터페이스는 내부의 모든 필드가 public static final로 정의되고 static, default 이외의 모든 메서드는 public abstarct로 정의된 객체지향 프로그래밍 요소

- 클래스가 인터페이스를 상속할때는 implements 키워드를 사용한다.
- 인터페이스의 특징: 다중 상속이 가능함 (클래스였을때는 불가능함) -> 각각의 인터페이스의 실제 데이터 값은 각각의 인터페이스 내부에 존재하기 때문에 공간상 겹치지 않기 때문
- 클래스와 인터페이스를 둘 다 상속하는 경우에는 부모 클래스는 인터페이스 앞에 표기한다.
- 인터페이스가 인터페이스를 상속할때는 extends 를 사용 가능
- 클래스가 인터페이스를 상속하면 오류 발생.. 인터페이스 내부의 미완성 메서드가 클래스 내부에 포함되므로
- 같은 타입끼리는 extends / 다른 타입끼리는 implements

# 연습문제

Q1. class B를 abstract로 선언해준다 //? 왜?
Q5. extends / extends / implements / 불가능
Q6. extends C implment A, B
Q7. 오버라이딩을 수행할 때 접근지정자는 반드시 부모 메서드의 접근 지정자보다 접근 범위가 같거나 커야 함. interface A의 접근지정자는 기본적으로 public 이지만 클래스 B의 기본 접근지정자 default 이므로
Q8.
