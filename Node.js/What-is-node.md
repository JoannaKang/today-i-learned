What is node?

1. Javascript runtime
* Run by v8 engine -> can use javascirpt ouside of browser

2. Single thread
* Operation system 
  - Code: 프로그램을 구성하는 코드
  - Stack: 함수의 실행 순서를 기억
  - Heap: 동적으로 생긴 데이터를 보관
  - Data: 전역변수 등등 프로그램 내에서 생성된 다양한 데이터

* Thread: 프로세스 안에 각각 다른 일을 병렬적으로 처리할 수 있도록 해줌
 ->내가 부릴 일꾼들...
![Screenshot 2021-07-10 at 17 52 46](https://user-images.githubusercontent.com/34419390/125170675-ea340d80-e1a7-11eb-83c3-d01f28363e1f.png)
  * 한 프로그램에서 여러 쓰레드를 쓰는 경우 : 멀티쓰레드 -> 자바
  * 한 프로그램에서 하나의 쓰레드만 쓰는 경우 : 상글쓰레드 -> 자바스크립트 (동기적인 프로그래밍 언어)

3. Non-blocking I/O
* what is non-blocking?: I/O를 처리할때 asynchronously 프로세스를 처리
  -> 콜백을 던지고 다음 프로세스로 넘어감
  * CPU: 내부적인 연산을 처리하는 프로세스
  * I/O: 외부적으로 쓰고 읽는 프로세스

4. Event driven
* 이벤트를 통해서 내가 등록한 콜백을 호출해줌
![Screenshot 2021-07-10 at 18 04 56](https://user-images.githubusercontent.com/34419390/125170923-5cf1b880-e1a9-11eb-9ed0-d1e3d4e40779.png)
* 콜스택에 실행된 함수가 차례대로 쌓이게 됨, 힙에는 생성된 데이터들이 저장되어있음
* 콜스택이 Node.js에게 실행 함수를 던지는 순간 Node API가 콜백함수를 받게 됨, 
  * 콜스택은 콜백함수가 실행 완료되는걸 기다리지 않고 다음 실행될 함수로 넘어감 
  * Node.js는 호출해야 하는 콜백함수를 태스크 큐라는 대기줄에다 등록
  * 이벤트루프는 콜스택이 비어있을때까지 기다리고 있다가 태스크큐의 작업들을 다시 콜스택으로 옮겨줌
![Screenshot 2021-07-10 at 18 15 13](https://user-images.githubusercontent.com/34419390/125171207-cde5a000-e1aa-11eb-8971-3b1a91882421.png)

5. Node의 구조
![Screenshot 2021-07-10 at 18 16 20](https://user-images.githubusercontent.com/34419390/125171239-fa99b780-e1aa-11eb-926b-216a90aaebd6.png)
* 어플리케이션은 메인 싱글쓰레드를 통해 동작한다
* 콜백함수는 가벼운 작업만을 수행해야 한다 -> 아니면 이벤트 루프의 프로세스를 느리게 만들기 때문에
* 노드는 I/O 처리에는 적합하나 CPU엔 적합하지 않을 수 있다. (ex-이미지, 비디오를 인코딩하는 작업)

6. 노드 서버의 특징과 장단점
* 전통적인 서버와의 비교
  * 전통적인 멀티스레딩 서버의 처리방식: 클라이언트의 요청이 들어올때마다 각각의 쓰레드를 할당, 대응 가능한 쓰레드보다 더 많은 요청이 들어오면 그 요청은 처리 가능한 쓰레드가 생길때까지 기다려야함
  * 노드의 싱글쓰레드 처리 방식: 하나의 메인 싱글 스레드가 존재 -> 싱글스레드가 요청을 받은 후 데이터베이스에 처리사항을 위임해두고 계속 다른 요청을 받음 
  -> 주문받는 점원 / 요리사 / 서빙하는 점원의 역할이 분리된것과 같음 