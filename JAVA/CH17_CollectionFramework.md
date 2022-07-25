## List<E> 컬렉션 인터페이스

### 1. 배열과 리스트의 차이점

- 배열은 최초로 지정된 크기를 변경할 수 없지만 리스트는 변경 가능

### 2. List< E > 객체 생성하기

- List 인터페이스를 구현한 대표적인 클래스
  - ArrayList< E >, Vector < E >, LinkedList< E >

1. List< E > 인터페이스의 구현 클래스 생성자로 동적 컬렉션 생성
   : 기본적으로 10 만큼의 저장 용량을 내부에 확보해 놓고 이후 저장용량이 더 필요하면 JVM이 자동으로 저장 용량을 늘려준다
2. Array.asList()메서드를 이용해 정적 컬렉션 객체 생성
   : 내부적으로 배열을 먼저 생성하고 List< E >로 래핑만 해놓은 것이라, 컬렉션 객체임에도 저장 공간 크기는 변경이 불가능하다

3. List< E >의 주요 메서드
   ![Screen Shot 2022-07-18 at 9 18 36 PM](https://user-images.githubusercontent.com/34419390/179609902-df265943-0680-405b-87ce-fffc019929bb.png)

4. ArrayList< E > 구현클래스

   - 대표적인 List< E > 의 구현클래스로서, 배열처럼 수집한 원소를 인덱스로 관리하며, 저장용량을 동적으로 관리한다
   - 메서드 <br>
     (1) 데이터 추가하기 : add() <br>
     (2) 데이터 변경하기 : set()
     ```
     // aList = [1,1,2,2]
     aList.set(1, 5);
     System.out.println(aList.toString());  // => [1, 5, 2, 6]
     ```
     (3) 데이터 삭제하기 : remove(), clear()
     - remove: 특정 아이템만 삭제
     - clear: 배열 안 모든 아이템을 삭제
     ```
     aList = [1, 5, 2, 6];
     aList.remove(1); // 인덱스 1번의 아이템을 삭제한다
     System.out.println(aList.toString()); // => [1, 2, 6]
     aList.remove(new Integer(2));
     System.out.println(aList.toString()); // => [1, 6]
     aList.clear();
     System.out.println(aList.toString()); // => []
     ```
     (4)데이터 정보 추출하기
     - isEmpty()
     - size()
     - get(int index)
     ```
     aList = [];
     System.out.println(aList.isEmpty()); // 배열이 비어있는지 체크 => true
     aList.add(1);
     aList.add(2);
     aList.add(3);
     System.out.println(aList.toString()); // [1, 2, 3]
     System.out.println(aList.size()) // 3
     System.out.println(aList.get(1)) // 2
     for (let i = 0; i < aList.size(); i++) {
       System.out.println(aList.get(i));
       // 해당 인덱스에 해당하는 값 하나씩 출력
     }
     ```
     (5) 배열로 변환하기 : toArray(), toArray(T[] t)
     ```
     toArray() aList = [1, 2, 3]
     Object[] object = aList.toArray(); // [1,2,3]
     Integer[] integer1 = aList.toArray (new Integer[0]); // [1,2,3]
     ```
     - list의 size() >= 배열의 length => list와 같은 size 크기를 가지는 배열 생성
     - list size() < 배열의 length => 배열 Length 크기를 가지는 배열 생성

   5. Vector< E >

   - ArrayList< E >와 공통점

     - 동일 타입의 객체 수집
     - 메모리의 동적 할당
     - 데이터의 추가, 변경, 삭제 등의 메서드를 가짐

   - ArrayList< E >와 다른점
     - 모든 메서드가 동기화 메서드로 구현되어 멀티쓰레드에 사용하기 적합
     - 메서드는 ArrayList와 사용 방법이 일치

5. LinkedList< E >
   - ArrayList와의 공통점
     - 동일한 타입의 객체를 수집
     - 메모리의 동적 할당
     - 데이터 추가, 변경, 삭제 등의 메서드가 존재
   - ArrayList 다른점
     - 디폴트 저장공간(10)만 사용하며 생성자로 저장공간의 크기 지정 불가
     - 데이터의 내부 저장방식이 index가 아닌 앞뒤 객체의 위치 정보를 저장
     - 아이템을 삭제하고 추가할 때 앞 뒤의 링크된 아이템의 정보만 바꾸면 됨, 따라서 정보의 추가, 삭제가 빠른 자료 구조
     - 반면에 데이터를 검색할때는 모든 연결된 정보를 탐색한 후 필요한 정보를 찾을 수 있으므로 ArraList보다는 검색 속도가 느림
   - 메서드 : 실제 내부적으로 동작하는 방식이 다를 뿐 ArrayList 와 동일

<hr>

## Set< E > 컬렉션

- 집합의 개념으로 인덱스 정보를 포함하지 않음
- 중복 저장 불가, 인덱스 정보가 없기 때문에 중복된 원소 중 특정 위치 값을 꺼낼 방법이 없음
- 중복 저장 가능, 불가능을 판단하는 기준 : 중복된 특정 원소 중 하나를 특정하여 꺼낼 수 있는지 여부
  ![Screen Shot 2022-07-20 at 10 20 24 PM](https://user-images.githubusercontent.com/34419390/180084408-b99c2537-052d-409e-9ccd-fa2a9c62597d.png)

1. HashSet< E >

- Set< E > 인터페이스를 구현한 클래스
- 수집한 원소를 집합 형태로 관리하며 저장용량을 동적으로 관리
- 입력 순서와 출력 순서는 동일하지 않을 수 있음
- 메서드
  - 데이터 정보 추출
    - iterator : Set< E > 객체 내의 데이터를 연속해 꺼내는 메서드
    ```
    Iterator<String> iterator = hSet3.iterator();
    while(iterator.hasNext()) {
      System.out.print(iterator.next())
    }
    // or
    for(String s : hSet3) {
      System.out.print(s);
    }
    ```
- 중복 확인 원리 : 해쉬코드는 객체를 기반으로 생성된 고유 값, Object의 equal()은==와 동일한 연산(저장 번지 자체를 비교한다)

2. LinkedHashSet< E >

- Set< E > 인터페이스를 구현한 클래스 (HashSet의 모든 기능 사용 가능)
- 입력 순서와 출력 순서는 동일, 단 중복 원소의 경우 추가되지 않음

3. TreeSet< E >

- Set< E > 인터페이스를 구현한 클래스
- 입력 순서와 관계 없이 크기순으로 오름차순 출력, 저장 원소는 대소 비교가 가능해야 함
- Set< E > 에서 사용하지 못하는 추가적인 정렬 기능을 사용하기 위해서는 TreeSet을 사용해야 함
- 메서드
  ![Screen Shot 2022-07-20 at 10 40 06 PM](https://user-images.githubusercontent.com/34419390/180087090-97b9addf-fc3a-4574-9ada-36d4822126ee.png)
  ![Screen Shot 2022-07-20 at 10 42 01 PM](https://user-images.githubusercontent.com/34419390/180087286-f4466c50-cba1-4425-bf21-f925723797bd.png)
- TreeSet에서 크기 비교

  - Integer 크기 비교 : 숫자 크기 비교
  - String 크기 비교 : 문자열 정렬 순서대로
  - Class 크기 비교 : 어떤 것을 기준으로 비교할건지 기준을 제시해줘야함

    - 방법1 : Comparable< T > interface 구현

    ```
    class MyComparableClass implements Comparable<MyCOmparableClass> {
      int data1;
      int data2;

      public MyComparableClass(int data1, int data2) {
        this.data1 = data1;
        this.data2 = data2;

      @Override // 비교 기준을 오버라이딩
      public int compareTo(MyComparableClass m) {
        if(data1 < m.data1) { return -1 }
        else if (data1 == m.data1) { return 0 }
        else return 1;
      }

      }
    }
    ```

    - 방법2 : TreeSet 생성자 매개변수로 Comparator< T > 객체제공

    ```
    TreeSet<MyClass> treeSet5 = new TreeSet<MyClass>(new Comparator<myClass>(){
      @Override
      public int compare(MyClass o1, Myclass o2) {
        if(o1 < o2.data1) { return -1 }
        else if (o1 ==o2.data1) { return 0 }
        else return 1;
      }
    })

    MyClass myClass1 = new MyClass(2, 5);
    MyClass myClass 2 = new MyClass(3, 3);
    // myClass1 < myClass2
    ```

<hr>

## Map< K, V > 컬렉션

- Key, Value 한 쌍의 데이터를 저장
- Key는 중복 저장 불가, Value는 중복 저장 가능
- 사용 가능 메서드
  ![Screen Shot 2022-07-21 at 9 40 29 PM](https://user-images.githubusercontent.com/34419390/180311384-d100ffc5-f638-45e5-a811-d5ab1031fef6.png)
  ![Screen Shot 2022-07-21 at 9 41 02 PM](https://user-images.githubusercontent.com/34419390/180311407-9c997ef0-6883-4aeb-bfa7-ae8cec88c3d4.png)

1. HashMap< K,V >

- Map< K, V > 인터페이스를 구현한 대표적인 구현 클래스
- Key, Value 쌍으로 데이터를 관리하며 저장공간을 동적으로 관리
- 입력, 출력의 순서는 동일하지 않을 수 있음, Key 값이 Set으로 관리됨
- 중복확인 메커니즘
  - 해쉬코드는 객체가 저장된 번지와 연관된 값
  - Object 의 equal()은 == 와 동일한 연산(저장 번지 비교)

2. HashTable< K,V >

- HashMap이 단일쓰레드에 적합한 반면 HashTable은 쓰레드 안정성을 가짐
- 모든 메서드가 동기화 메서드로 구현되어 멀티쓰레드에 적합함

3. LinkedHashMap< K,V >

- HashMap과 동일한 기능을 수행하지만 입력순서 = 출력순서
- key가 linkedHashSet 형태로 관리되기 때문

4. TreeMap

- 엔트리 집합의 형태로 관리하며 저장공간을 동적 관리
- 입력 순서와 관계 없이 key 값의 크기 순으로 출력(Key값은 대소비교가 가능해야 함)
- 관련 메서드
  ![Screen Shot 2022-07-21 at 10 10 10 PM](https://user-images.githubusercontent.com/34419390/180315987-b4776d7c-4ae3-4002-b661-d53b3c6d0cf1.png)
  ![Screen Shot 2022-07-21 at 10 10 42 PM](https://user-images.githubusercontent.com/34419390/180315976-98462dcc-dda9-4e93-9fab-62805f003c9e.png)
  ![Screen Shot 2022-07-21 at 10 11 15 PM](https://user-images.githubusercontent.com/34419390/180315972-dfcbd5b9-144e-4780-beb2-05980913a4b8.png)

<hr>

## Stack< E >

- Vector< E >의 자식 클래스, 즉 List< E >의 특징을 상속받음
- LIFO(Last In First Out)의 구조
- 관련 메서드 : Vector의 기본 기능과 LIFO 특징을 구현하기 위한 메서드가 포함됨
  - push(): 데이터를 아래서 밀어넣음
  - peek() : 다음 꺼내질 데이터를 확인
  - pop() : 맨 위의 데이터를 빼냄
  - search() : 데이터 위치 검색, Stack 원소의 위치값을 리턴, 최상위 위치 1을 기준으로 아래로 내려갈 수록 1씩 증가
  - empty() : 스택이 비워져있으면 true 아니면 False

<hr>

## Queue< E >

- Stack과 달리 별도의 interface로 구성
- 먼저 들어간 데이터가 먼저 나오는 FIFO(First In First Out) 구조
- 관련 메서드
  - 예외 처리 기능 미포함
  - add() : 매개변수 아이템을 추가
  - element() : 가장 상위에 있는 원소 값 리턴 (꺼낼 데이터 없는 경우 NoSuchElementException 발생)
  - remove() : 가장 상위에 있는 원소 값 꺼내기 (꺼낼 데이터 없는 경우 NoSuchElementException 발생)
  - 예외 처리 기능 포함
    - offer() : 매개변수의 item을 Queue에 추가
    - peek() : 가장 상위에 있는 원소 값 리턴 (데이터 하나도 없는 경우 null 리턴)
    - poll() : 가장 상위에 있는 원소값 꺼내기 (꺼낼 데이터 없는 경우 null 리턴)

<hr>

Q1

```
public class Q1 {
    public static void main(String[] args) {
        List<Integer> list1 = new ArrayList<Integer>();
        list1.add(1);
        list1.add(2);
        list1.add(3);
        System.out.println(list1);
        List<Integer> list2 = Arrays.asList(1,2);
        // asList를 사용해 List 객체를 만들 때 원본 배열의 주소값을 가져오므로 새로운 원소를 추가하거나 삭제할 수 없음
        // list2.add(3);
        System.out.println(list2);
    }
}
```

Q2.

```
public class Q2 {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(2);
        list.add(3);
        list.add(4);
        System.out.println(list);
        list.remove(2);
        System.out.println(list);
    }
}
```

- 실행결과
  [2, 3, 4]
  [2, 3]

Q3.

```
public class Q3 {
    public static void main(String[] args) {
        List<Boolean> list = new Vector<>();
        list.add(true);
        list.add(false);
        list.add(true);
        Boolean[] bArray = list.toArray(list.toArray(new Boolean[5]));
        System.out.println(Arrays.toString(bArray));
    }
}
```

- 실행결과

  [true, false, true, null, null]

Q4. LinkedList : 새 데이터를 입력할 때 입력하려는 위치 앞 뒤의 연결 정보만 업데이트해주면 되므로 새 요소 입력, 삭제에 용이한 데이터 구조

```
public class Q4 {
    public static void main(String[] args) {
        List<String> list = new LinkedList<String>();
        for (int i = 0; i < 100000; i++) {
            list.add(0, i + "데이터");
        }
        System.out.println("완료");
    }
}
```

Q5.

```
public class Q5 {
    public static void main(String[] args) {
        Data data1 = new Data(3);
        Data data2 = new Data(3);
        // 두 인스턴스의 해시코드 값을 비교하므로 false
        System.out.println(data1 == data2);
        // 두 인스턴스의 필드 값을 비교하므로 true
        System.out.println(data1.equals(data2));
        // 두 인스턴스의 해시코드 값을 비교하므로 false
        System.out.println(data1.hashCode() == data2.hashCode());
    }
}
```

Q6.

```
class Data {
    int m ;
    public Data(int m) {
        this.m = m;
    }
    @Override
    public boolean equals (Object obj) {
        if(obj instanceof Data) return this.m ==((Data)obj).m;
        else return false;
    }

    @Override
    public int hashCode() {
      // 필드 값을 기준으로 해시 코드 생성
        return Objects.hash(m);
    }
}

public class Q6 {
    public static void main(String[] args) {
        Set<Data> set = new HashSet<>();
        set.add(new Data(2));
        set.add(new Data(2));
        // set은 중복을 허용하지 않으므로 2를 두번 추가하지 않음
        set.add(new Data(3));
        System.out.println(set.size());
    }
}
```

Q7

```
class MyData2 implements Comparable<MyData2> {
    String str;
    public MyData2(String str) {
        this.str = str;
    }

    @Override
    public int compareTo(MyData2 o) {
        if (this.str.length() < o.str.length()) {
            return -1;
        } else if (this.str.length() == o.str.length()) {
            return 0;
        } else {
            return 1;
        }
    }


    @Override
    public String toString() {
        return str;
    }
}

public class Q7 {
    public static void main(String[] args) {
        MyData2 md1 = new MyData2("자바 프로그램");
        MyData2 md2 = new MyData2("반가워");
        MyData2 md3 = new MyData2("감사합니다");
        TreeSet<MyData2> treeSet = new TreeSet<>();
        treeSet.add(md1);
        treeSet.add(md2);
        treeSet.add(md3);
        System.out.println(treeSet);
    }
}
```

Q8.

```
public class Q8 {
    public static void main(String[] args) {
        Map<String, Boolean> map = new HashMap<>();
        map.put("사운드", true);
        map.put("그래픽", false);
        map.put("배경음", true);
        map.put("그래픽", true);

        System.out.println(map);
    }
}
```

Q9.

```
public class Q9 {
    public static void main(String[] args) {
        Stack<Double> stack = new Stack<Double>();
        stack.push(1.1);
        stack.push(2.2);
        stack.pop();
        stack.push(3.3);
        stack.push(4.4);

        System.out.println(stack.search(1.1));
        System.out.println(stack.search(2.2));
        System.out.println(stack.search(3.3));
        System.out.println(stack.search(4.4));
    }
}
```

- 실행결과 : 3, -1, 2, 1

Q10.

```
public class Q10 {

    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();
        queue.offer("땡큐");
        queue.offer("베리");
        queue.offer("감사");
        queue.poll();
        queue.offer("방가");
        System.out.println(queue.peek());
        System.out.println(queue.poll());
        System.out.println(queue.poll());
        System.out.println(queue.poll());
    }
}
```

- 실행결과 : 베리 베리 감사 방가
