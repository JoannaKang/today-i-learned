## 1. 프로그램, ,프로세스, 쓰레드의 개념

- 하드디스크 : 용량은 크지만 속도는 느림
- 메모리 : 용량은 작지만 속도가 빠름
- CPU : 속도가 빠름
  - 프로그램을 CPU에서 실행하려면 하드디스크의 내용을 메모리로 로딩해야 함
  - 여러 개의 프로그램을 로딩하는 경우 : 멀티 프로세스

## 2. 프로세스의 구조 - Thread
   ### 1. Thread의 개념
   - CPU는 메모리와만 대화
   - 더 정확하게는 메모리 안 프로세스 안의 Thread가 CPU와 이야기함,
   - Thread를 안쓰는 프로세스는 CPU를 사용하지 않는 프로그램,Thread가 없는 프로세스는 없음
   - 쓰레드는 CPU를 사용하는 최소 단위
   ### 2. 자바 상의 Thread
   - JVM 이 .class 파일 실행하면 Main thread 생성
   - 시작 시점에는 Main thread만 존재, 이후 main thread가 복수의 thread를 생성하며 multi threard가 됨
   ### 3. Multi Thread의 필요성
   - 여러 작업을 동시에 처리해야 할 때 (Ex - 비디오 플레이 + 자막 플레이를 함께 해야 할 때)
   - 동시성(Concurrency) : 작업수가 사용 가능한 CPU 코어 수 보다 많을 때에는 CPU는 각 작업 쓰레드의 요청 작업을 번갈아 가면서 실행한다
   - 병렬성(Parallelism) : CPU의 코어 수가 작업 수 보다 많을 때에는 각각의 작업을 코어에 할당해 동시에 실행할 수 있게 함
   ### 4. Thread의 생성 및 실행 방법
   - 생성 방법 <br>
      (1) Thread Class를 상속받아 run() 메서드 재정의<br>
      (2) Runnable interface 구현 
      - 추상메서드 run()구현
      - Thread 생성자로 Runnable 객체 전달
   - Thread 실행 방법
      - Thread class의 start() 메서드 호출 
      - 재정의한 메서드는 run() 이지만 Thread의 실행은 start() 메서드 호출
         * CPU를 사용하기 위한 사전준비가 필요, start()를 호출해줘야 사전준비가 시작됨
         * start()는 새로운 Thread 생성/추가를 위한 준비 + 새로운 Thread 위에 run() 실행
         * run()을 호출해도 오류는 나지 않지만 단일 Thread 상에서 동작, multi thread를 사용하려는 환경에서는 사용하는게 무의미
      - Thread 객체는 재사용 할 수 없음
      - 하나의 객체는 한번만 start() 가능
   - Thread의 속성
      - 현재 Thread 객체 참조값 얻어오기 : `static Thread Thred`
      - 실행 중인 Thread 개수 가져오기 :  `static int Thread.activeCount()`
      - Thread의 이름 지정 및 가져오기 : `String setName(String name)` => Thread 이름을 지정하지 않으면 컴파일러가 대신해서 자동으로 부여함
      - Thread 객체 우선순위 가져오기 : `int getPriority()`
      - Thread 객체 우선순위 정하기 : `void setPriority(int priority)`
   - 데몬 Thread 
      - 일반 Thread가 모두 종료되는 Thread
      - 데몬 Thread 설정 : `void setDeamon(boolean on)` => 데몬 쓰레드 설정은 start() 메서드 호출 전에 설정해야 한다.
      - 데몬 Thread 설정 확인 : `boolean isDeamon()`

   ### 5. 동기화
   - 하나의 작업이 완전히 완료된 후 다른 작업 수행<br>
      참고) 비동기식 : 하나의 작업 명령 이후 완료 여부와 상관 없이 바로 다른 작업 명령을 수행
   - 동기화의 필요성 : 두 개의 Thread가 하나의 객체를 공유하는 경우 -> 하나의 Thread가 사용중일 때는 객체를 lock, 멀티쓰레드의 특징을 굳이 무시해야 하는 경우에만 사용
   - 동기화 방법
     - 메서드 동기화 : 동시에 두 개의 Thread가 동기화 메서드 사용 불가
         ```
         class MyData {
            int data = 3;
            public synchronized void plusData() {
               int mydata = data;
               try {
                  Thread.sleep(2000);
               } catch (InterruptedException e) {
                  data = mydata + 1;
               }
            }
         }
         ```
     - 블록 동기화 : 동시에 두 개의 Thread가 동기화 블록 사용 불가
         ```
         class MyData {
            int data = 3;
            public void plusData() {
               synchronized(this) {
                  // 동기화가 필요한 코드
               }
            }
         }
         ```
   - 동기화의 원리
      - 모든 객체는 단 하나의 열쇠를 가지고 있음
      - 동기화를 사용하면 처음 사용하는 Thread가 Key 객체의 Key를 가짐
      - 다른 Thread는 먼저 사용하는 Thread가 작업을 완료하고 Key 반납할 때 까지 대기 (Blocked)

   ### 6. 동기화
   - Thread의 상태
      - new : Thread의 객체가 생성된 상태, start() 전
      - RUNNABLE : start() 이후 CPU를 사용할 수 있는 상태, 다른 Thread에 CPU 사용을 양보하고 자신은 실행 대기 상태로 전환, 다른 Thread들과 동시성에 따라 실행과 실행 대기 상태를 교차함
      - TERMINATED : run() 메서드의 작업 내용이 모두 완료되어 Thread가 종료된 상태, 한번 실행된 쓰레드는 재실행이 불가
      - TIMED_WAITING : 하나의 쓰레드가 다른 쓰레드에 join() 명령을 내리게 되면 명령을 내린 메서드는 일시정지가 되고 Join 명령을 받은 객체가 CPU를 점유한다.
      - BLOCKED : 다른 Thread는 먼저 사용하는 Thread가 작업을 완료하고 Key 반납할 때 까지 대기 
      - WAITING : wait()을 호출한 메서드는 일시정지 상태가 되고, 다른 쓰레드가 notify, notifyAll 로만 깨울 수 있음 (wait - 얼음 / notify & notifyAll - 땡)
      