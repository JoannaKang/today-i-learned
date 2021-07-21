1. 운영체제의 목적

- 컴퓨터 시스템의 자원을 효율적으로 관리
  - 주어진 자원으로 최대한의 성능을 내도록 프로세서, 기억장치, 입출력 장치 등을 효율적으로 관리
- 사용자 및 운영체제 자신의 보호
- 프로세스 파일, 메시지 등을 관리

2. 운영체제의 분류

- 동시작업 가능 여부를 기준으로
  - 단일작업(Single tasking): 한번에 하나의 작업만 처리
  - 다중작업(Multi tasking): 동시에 두개 이상 작업 처리
- 사용자의 수
  - 단일 사용자(Single user): MS-DOS, windows
  - 다중 사용자(Multi user): Unix, NT server
- 처리방식
  _ 일괄처리(Batch processing)
  _ 작업 요청의 일정량을 모아 한번에 처리 → 작업이 완전 종료될 때 까지 기다려야 함  
   ex) 초기 punch card system
  _ 시분할 (Time sharing): 범용으로 쓰이는 운영체제
  _ 여러 작업을 수행할 때 컴퓨터 처리 능력을 일정한 시간 단위로 분할하여 사용
  _ 일괄 처리 시스템에 비해 짧은 응답시간을 가짐 → Interactive한 방식
  _ 실시간 (Real time)
  _ 정해진 시간 안에 어떠한 일이 반드시 종료됨이 보장되어야 하는 실시간 시스템을 위한 OS  
   ex) 원자로/공장 제어, 미사일 제어, 반도체 장비, 로보트 제어
  _ 실시간 시스템의 확장 - Hard realtime system: deal with more rigorous operation - Soft realtime system: playing video
  <br/>
  <br/>

3. 운영체제 관련 용어

- Multitasking
- Multi programming: 메모리에 여러 응용프로그램이 동시에 올라가있는 경우
- Time sharing: CPU가 시간을 쪼개서 쓴다는 의미를 강조
- Multi process  
  → 위 단어들 모두 컴퓨터에서 여러 작업을 동시에 수행하는 것을 뜻함

- Multi processor: 하나의 컴퓨터에 CPU(Processor)가 여러 개 붙어있음을 의미

4. 운영체제의 예

- Unix
- DOS
- Windows  
  ...

5. 운영체제의 구조

- CPU 스케줄링: 누구한테 CPU를 할당할 것인가
- 파일관리: 디스크에 파일을 어떻게 보관할 것인가
- 입출력 관리: 각기 다른 입출력장치와 컴퓨터 간에 어떻게 정보를 주고받을 것인가
- 프로세스 관리
  - 프로세스의 생성과 삭제
  - 자원 할당 및 반환
  - 프로세스간 협력
- 그 외
  - 보호시스템
  - 네트워킹
  - command line interpreter
