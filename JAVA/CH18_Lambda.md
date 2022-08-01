## 1. 람다식 (Lambda Expression)

- 정의 : 자바에서 함수형 프로그래밍을 지원하는 기법
- 코드를 간결하게 만들고, 병렬처리에 강함
- 용어 정리

  - 함수: 기능, 동작을 정의
  - 메서드 : 클래스 또는 인터페이스 내부에서 정의된 함수
  - 함수형 인터페이스 : 내부에 단 1개의 추상메서드만 존재하는 인터페이스

- 함수형 프로그래밍과 객체지향의 개념적 비교

  - 함수적 프로그래밍 : 함수를 정의하고 구현한 후 → 함수 이름을 바로 사용
  - 객체 지향 프로그래밍 : 함수 정의하고 구현한 후 → 객체를 생성하고 → 참조변수.메서드이름 을 호출하여 메서드 사용

- 문법적인 의미만 고려하면 람다식은 익명이너클래스의 약식 표현, 그러나 함수적 인터페이스(=미완성 메서드가 하나만 존재하는 인터페이스)의 메서드만 람다식 표현 가능

## 2. 메서드 (함수) → 람다식 변환 방법

```
// 일반 메서드
void method1() {
  System.out.println(3);
}
// 람다식
() -> {System.out.println(3);}
```

```
// 일반 메서드
double method4(int a, double b) {
  return a+b;
}
// 람다식
(int a, double, b) -> { return a + b };
```

## 3. 람다식의 약식 표현

- 실행문이 하나인 경우 중괄호 생략 가능

```
A a = () -> { System.out.println("test"); }
```

- 매개변수 타입 생략 가능

```
A a = a -> {...}
```

- 실행문으로 리턴만 있는 경우 Return 생략 가능

```
A a = (a, b) -> a+b;
```

## 4. 람다식의 활용

### case1) 익명 이너클래스 내 구현 메서드의 약식 표현 (함수형 인터페이스만 가능)

- 함수형 인터페이스

```
interface A {
  void method2 (int a);
}
```

- 익명 이너클래스 활용

```
A a = new A() {
  public void method2 {
   // 메서드 구현
  }
}
```

- 람다식 활용

```
A a = (int a) -> { // 메서드 구현 }
```

### case2) 이미 다른 클래스에 정의된 메서드를 참조하여 람다식에 삽입

1. 인스턴스 메서드 참조

```
interface A {
  void abc();
}

//  interface A안에서 B 인스턴스를 생성하여 B 인스턴스에 존재하는 메서드를 A 안에서 사용하고 싶다면?
class B {
  void bcd() {
    System.out.println("method");
  }
}

// 1. 일반적인 방법
A a = new A(){
  public void abc() {
    B b = new B ();
    b.bcd()
  }
}
  // 결국 abc() 메서드 = B 객체의 bcd 메서드

// 2. 간략하게 정리한 방법
A a = () -> {
  B b = new B();
  b.bcd();
}

// 3.더 간략하게
B b = new B();
// A 인터페이스 안의 미완성 메서드를 B 클래스의 bcd 메서드를 활용해 완성한다.
A a = b::bcd;
```

2. 정적 메서드 참조

```
interface A {
  void abc();
}

class B {
  // 메서드가 정적 메서드로 정의됨
  static void bcd() {
    System.out.println("method");
  }
}

A a = new A() {
  public void abc(){
    // Static 메서드 이므로 객체를 생성할 필요가 없음
    B.bcd();
  }
}

// 람다식으로 간략하게
A a = () -> {
  B.bcd()
}

// 더 간략한 버전
A a = B::bcd;
```

3. 인스턴스 메서드를 참조하는 다른 방법 : 첫번째 매개변수로 전달된 객체의 메서드를 참조하는 경우

```
interface A {
  void abc(B b, int k);
}

class B {
  void bcd(int k) {
    System.out.println(k);
  }
}

A a = new A() {
  public void abc(B b, int k){
    // 첫번째 매개변수(=B)의 메서드로 두번째 매개변수(=k)를 전달하는 경우
    b.bcd(k);
  }
}

// 람다식으로 정리
A a = (b, k) -> {
  b.bcd(k)
}
// 더 간략하게
A a = B::bcd;
```

### case3) 생성자 참조

1. 배열 생성자 참조

```
interface A {
  // 배열의 크기를 len으로 정하고 싶을 때
  int[] abc(int len);
}

A a = new A() {
  public int[] abc(int len) {
    // len으로 전달된 숫자 크기와 같은 사이즈의 배열을 리턴
    return new int[len];
  }
}

// 람다식으로 간략하게
A a = () -> new int[len];
// 더 간략하게
A a = int::new;

// a.abc(8)의 실행결과는 ? -> int[8]
```

2. 클래스 생성자 참조

```
interface A {
  B abc();
}

class B{
  B(){//첫번째 생성자}
  B(int k) {// 두번째 생성자}
}

A a = new A(){
  public B abc() {
    // 매개변수 없이 B 호출
    return new B();
  }
  // 즉, abc() 메서드 = new B()
}

// 람다식으로 간단하게
A a = () -> { new B(); };
// 더 간단하게
// new A 안에서 B 생성자를 호출할 때 매개변수가 없으므로 첫번째 생성자가 호출됨
A a = B::new;
```
