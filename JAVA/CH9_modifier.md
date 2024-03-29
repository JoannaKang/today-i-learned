9장. 자바 제어자

9.1. 접근 지정자

9.1.1 멤버 및 생성자의 접근 지정자
* 접근 지정자를 따로 할당하지 않으면 default가 기본값 
* 1-2-3-4로 갈수록 접근 범위가 좁아짐

1) public: 어디에서나 사용 가능
2) protected: 같은 패키지의 모든 클래스에서 사용 가능 + 다른 패키지의 자식 클래스에서도 사용 가능
3) default: 같은 패키지 안의 모든 클래스에서 사용할 수 있는 접근 지정자
4) private: 자신의 클래스 내부에서만 사용할 수 있는 접근 지정자

9.1.2. 클래스의 접근 지정자
1) public: 다른 패키지 안에서도 해당 클래스를 사용할 수 있게 만듬
2) default: 다른 패키지 안에서 임포트가 불가능

* 자동으로 추가되는 생성자의 접근 지정자는 클래스의 접근 지정자에 따라 결정됨
   * Public 으로 선언된 클래스에 별도 생성자가 없을 경우 기본적으로 public 생성자가 추가됨
   * 생성자가 아무 지정자 없이 선언되었다면 기본값은 default -> 다른 패키지에서 호출 불가능, 앞에 publi을 붙여줄것

9.2. static 제어자
* 객체의 생성 없이 클래스명.멤버명 만으로 바로 사용할 수 있도록 만든다

9.2.1. 인스턴스 필드와 정적필드
* static 이 붙어서 선언된 정적 필드는 별도 인스턴스 생성 없이 바로 사용 가능 (클래스 내부에 저장공간을 가지고 있으므로2)
* 정적 메서드 내에서는 정적 필드 또는 정적 메서드만 사용할 수 있다. -> 인스턴스를 생성하지 않고 사용할 수 있어야 하므로


[연습문제]
Q1. public -> protected -> default -> private
Q2. public -> default
Q3. 
Q4. 정적 메서드 안에서 인스턴스 필드가 호출되었으므로 오류 발생
Q5. 30 / 60 / 50 / 60