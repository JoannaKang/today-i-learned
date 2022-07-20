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
