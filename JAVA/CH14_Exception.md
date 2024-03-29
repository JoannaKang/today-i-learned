1. 예외 및 예외처리

- 예외와 에러의 차이

  - 예외(Exeption) : 개발자가 대체 방안을 만드는 것이 가능한 오류
    - e.g. 1/0 -> 연산 불가
  - 에러 (Error) : JVM 자체의 오류로 개발자가 해결할 수 없는 오류
    - e.g. OutOfMemoryError, ThreadDeath

- 예외의 종류

  - 일반 예외(Checked Exception)
    - Exception 클래스로부터 바로 상속받은 클래스,
    - 문법을 컴파일 전에 체크, 예외가 발생하면 컴파일 자체가 안됨 -> 예외 처리 필수
  - 실행 예외(RuntimeException)
    - 문법을 체크하지 않음, 예외가 발생해도 프로그램은 실행 가능
    - 실행시 에러가 발생하면 프로그램이 그냥 종료되어 버림

- 일반예외

  - Thread.sleep : Thread 실행 중 InturruptException 발생 가능
  - Class.forName : Class가 없는 경우 예외 발생 가능
  - isr.read() : 콘솔로부터 입력을 받다가 오류가 발생 가능
  - new FileInputStream : 읽어오려는 File이 없는 경우 FileNotFoundException 발생
  - clone() : 어떤 클래스는 복제가 가능하지 않는 경우 예외처리를 해줘야 함
    -> 이런 코드를 써주는 경우 무조건 예외처리를 해야함

- 실행예외

  - ArithmeticException : 분모가 0인 연산 불가로 인한 예외 발생
  - ClassCastException : Class 캐스팅이 불가능한 경우 예외 발생
  - ArrayIndexOutOfBoundException : 배열의 인덱스를 벗어나는 경우 예외 발생
  - NumberFormatException : 숫자가 아닌 것을 숫자로 바꿀 때 예외 발생
  - NullPointerException : 객체를 생성하지 않고 멤버를 사용할 때 예외 발생 가능
    -> 예외처리 하지 않아도 컴파일은 가능, 실행 중 예외가 발생하면 프로그램 종료

- 예외 처리 방법

  - 문법

    ```
    try {
      // 예외 발생 가능 코드
      // 일반, 실행 예외 발생 가능 코드
    } catch (예외 클래스 이름 참조변수명) {
      // 예외발생 시 처리 블록
    } finally {
      // 예외 발생 여부에 상관 없이 무조건 실행됨
    }
    ```

  - 예외 처리 프로세스

    - try block에서 예외 발생
    - JVM에서 예외 상황을 파악하고 발생한 예외 클래스의 객체를 catch블록으로 전달한다
    - 해당 예외 클래스 객체를 핸들링 할 수 있는 catch 블록에서 예외상황을 처리함
    - 예외 클래스 객체를 핸들링 할 catch 블록이 없다면 JVM 은 프로그램을 종료해버림
    - finally 블록은 모든 상황에서 실행됨

  - 다중 예외 처리
    - try, finally 블록은 하나만 존재 할 수 있으나 catch 블록은 여러 개 선언 가능
    - catch 블록이 여러개인경우 위의 catch 블록부터 순차적으로 실행됨 (if..else if 와 비슷한 구조)
    - OR 연산자 이용하여 하나의 catch 블록에서 두 개 이상의 예외 처리 가능
  - 리소스 자동 해제 예외 처리

    - 리소스를 자동으로 해지할 수 있는 문법 구조

    ```
    try (리소스를 사용하는 코드) {
      //리소스를 사용하지 않는 예외 발생 가능 코드
    } catch {
      // 예외 처리 블록
    }

    // 따로 finally 블록에서 is.close 호출 하지 않아도 리소스가 자동으로 해제된다.
    ```

    - 실제 코드

    ```
      try (InputStreamReader is = new InputStreamReader(System.in)) {
        System.out.println(is.read())
      } catch(IOException e) {
        // 예외처리
      }
    ```

    - try 뒤 괄호 안에 오는 자동 해제 리소스 객체는 반드시 close 메서드를 포함하여야 함
    - 자동 해제 리소스 객체는 AutoCloseable 인터페이스를 구현하여야 함

2. 예외의 전가

- 예외처리를 자신이 호출된 지점으롤 전가
- 메서드이름(...) Throws 예외클래스

  ```
  void abc(...) {
    try {
      bcd()
    } catch (예외클래스타입 참조변수) {
      예외처리
    }
  }

  void bcd(...) throws 예외클래스타입 //=>abc 클래스로 예외 전가 시 abc가 예외를 처리해야 함
  {
    예외가능블록
  }

  * bcd에서 전가한 예외클래스 타입과 abc의 catch 블록의 예외 클래스 타입은 같아야 함
  ```

- Thread.sleep() 메서드 호출시 예외처리가 필요한 이유

  - sleep() 메서드가 InterruptedException 예외를 전가하도록 정의되어 있음
  - sleep 메서드를 호출하는 메서드는 예외를 직접 처리하거나 다른 클래스에 전가해야 함

- 예외의 다중 전가 : 여러개의 예외를 전가할 수 있다

  ```
  void abc() {
    try{
      bcd();
    } catch(ClassNotFoundException e) {
      // 예외처리
    } catch(InterruptedException e) {
      // 예외처리
    }
  }

  // 다중 예외 전가 -> abc 클래스 안 catch 블록에서 예외를 처리한다.
  // throw (x) throws(o)
  void bcd() throws ClassNotFoundException, InterruptedException {
    class cls = Class.forName("java.lang.Object");
    Thread.sleep(1000);
  }
  ```

- 상위 메서드들이 예외를 처리하지 않고 계속 전가만 하다보면 결국 JVM이 예외를 처리하게 됨
  -> JVM은 예외의 원인을 출력하고 그냥 프로그램을 종료시켜버림

3. 예외 클래스 사용자 정의

- 예외 클래스 작성방법
- Exception 상속 : 일반예외(Checked Exception)로 생성

```
class MyException extends Exception {
  MyException () {
    // 문자열이 없는 예외 처리
  }

  MyException (String s) {
    // s : 생성자에 문자열을 전달하여 예외 메시지를 만든다
    super(s) // 부모 생성자 호출
  }
}
```

- RuntimeException : 실행예외 (Unchecked Exception)로 생성

```
  class MyRTException extends RunTimeException {
    MyRTException() {
      // 문자열이 없는 예외 처리
    }
    MyRTException(String s) {|||||
      // s : 생성자에 문자열을 전달하여 예외 메시지를 만든다
      super(s) // 부모 생성자 호출
    }
  }
```

- 모든 예외 클래스는 Throwable 클래스를 상속하며 getMessage(), printStackTrace()는 Throwable 클래스의 메서드임

- 예외 클래스 사용자 예시

  - 점수는 0에서 100까지만 유효, 이 외에는 예외 발생

  ```
  class A {
    // 예외를 던지는 메서드: checkScore
    // throws 키워드를 사용했으므로 다른 클래스에 예외를 전가함
    void checkScore(int score) throws MinusException, OverException {
      if(score<0) {
        throw new MinusException("예외: 음수값 입력");
      }
      else if(score > 100) {
        throw new OverException("예외: 100점 초과");
      }
      else {
        System.out.println("정상적인 값입니다");
      }
    }
  }

  public static void main(String[] args) {
    A a = new A();
    try {
      //checkScore 내에서 예외처리 요청을 전가함
      a.checkScore(85); // 정상적인 값입니다
      a.checkScore(150); // 예외 100점 초과
    } catch(MinusException | OverException e) {
      // 전가받은 예외처리를 여기에서 처리
      System.out.println(e.getMessage());
    }
  }
  ```

[ 연습문제 ]

- Q1.

  - C / F / G / E / D / B / A

- Q2.

  ```
  try {
    int a = 3;
    System.out.pritnln(5/a);
  } catch (ArithmeticException e) {
    System.out.println("예외발생")
  } finally {
    System.out.println("출력내용 1")
    System.out.println("출력내용 2")
    System.out.println("출력내용 3")
  }
  ```

- Q3.

  ```
  try {
    int [] array = {1,2,3};
    int index = 4;
    System.out.println(array[index]);

    A aa = new A();
    B bb = new B();
  } catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("배열값 읽기 실패");
  } catch (ClassCastException e) {
    System.out.println("클래스 다운캐스팅 실패");
  } finally {
    System.out.println("처리완료");
  }
  ```

- Q4.

  - ArrayIndexOutOfBoundsException 은 실행되지 않는 오류
  - 위의 catch 블록과 순서를 바꿔줘야 함

- Q5.
  ```
  class A implements AutoCloseable {
    String res = "리소스 할당"
    @Override
    public void close() throws Exception {
      res = null;
      System.out.println("리소스 자동 해제");
    }
  }
  ```
- Q6
  ```
  class A {
    void abc() {
      try {
        bcd();
      } catch (InterruptedException | ClassNotException e) {
        e.printStackTrace();
      }
    }
    void bcd() throws InterruptedException , ClassNotException {
      Thread.sleep(1000);
      Class.forName("java.lang.Object");
    }
  }
  ```
- Q7.
  - 장학금 대상자 입니다
  - 학점 미달입니다
