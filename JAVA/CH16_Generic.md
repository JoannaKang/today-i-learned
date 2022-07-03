## 1. Generic 클래스, 인터페이스의 필요성

e.g.

```
class Apple {}
 private Apple apple = new Apple();
 public Apple get() {
   return apple;
 }
 public void set(Apple apple) {
   this.apple = apple;
 }
// 근데 만약에 다른 상품을 또 추가하고싶다면..? 같은 형태의 클래스를 private 프로퍼티만 바꾸어서 계속 생성해줘야해서 비효율적
// 제네릭을 활용한다면 객체 타입캐스팅을 정확히 하면서도 여러 형태의 오브젝트를 다루는 클래스를 만들 수 있음
```

## 2. Generic / Interface의 문법

1. 제네릭 타입 변수

- T : 타입
- K : 키
- V : 값
- N : 숫자
- E : 원소

2. 사용 예시

1) 제네릭 타입 변수 1개인 경우

```
public class MyClass<T> {}
 private T t = t;
 public T get() {
   return t
 }
 public void set(T t) {
   this.t = t;
 }
```

2) 제네릭 타입 변수 2개인 경우

```
public interface MyInterface<K, V> {
  public abstract void setKey(K k);
  public abstract void setValue(V v);
  public abstract K getKey();
  public abstact V getValue();
}
```

3) 객체를 생성할 때
```
MyClass<string> mc1 = new MyClass<String>();
```

## 3. 제네릭 메서드
1) 생성할 때
```
접근지정자 <T> T method (T t) {

}
```
2) 호출할 때
```
 참조객체.<제네릭타입>메서드이름(매개변수);

 // 단, 매개변수 타입으로 유추 가능한 경우 <제네릭타입> 생략 가능
 참조객체.메서드이름(매개변수)
```

3) 제너릭 메서드 내에서 사용가능한 메서드
* 제너릭 메서드 내부에서는 참조변수의 메서드로 Object 클래스의 메서드만 사용 가능 (제너릭 메서드가 선언될 때 나중에 어떤 타입이 될 지 모르므로)