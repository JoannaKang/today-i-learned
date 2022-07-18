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
