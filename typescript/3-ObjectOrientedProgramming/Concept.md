# What is OOP?

- Imperative and Procedural programming : 정의된 순서대로 함수가 하나씩 호출하는 프로그래밍 방식
- Object oriented programming: 프로그램을 객체로 정의해서 객체끼리 의사소통해나가도록 프로그래밍
- Object의 구성

1. Properties(=fields): 객체가 가지고 있는 데이터
2. Methods(=function): 객체가 가지고 있는 함수
   -> 주로 클래스를 이용해 생성한다
   -> 클래스 = 템플릿 / 클래스로 생성된 객체 = 인스턴스

# OOP의 원칙

1. Encapsulation: 서로 연관있는 데이터와 함수를 묶어서 한 오브젝트 안에 담아두는 것

- State: 오브젝트 안에 정의되어있는 함수와 데이터들 -> 외부 function을 통해 내부 state를 변경할 수 있다.
- ex) 고양이가 배고파하고 짜증나하고 ...등등(=state)을 바꿀수는 없지만 놀아주거나 밥을 주는 (=외부 함수) 방법으로 state를 바꿀 수 있다.

2. Abstraction: 외부에서는 오브젝트 내부가 어떻게 구성되어있는지 자세한 로직을 볼 수는 없지만 인터페이스를 통해 사용 할 수 있게 하는 것
3. Inheritance: 다른 클래스의 특징을 상속받아와서 다른 오브젝트들을 만들 수 있다
4. Polymorphism(다형성): 상속을 통해 만들어진 오브젝트들은 공통된 함수를 통해 접근할 수 있다.
