### 자바의 파일
* File 객체의 생성
   * File 생성자를 사용
      * File(String pathname): pathname 위치를 가리키는 파일 객체 생성
      * File(File parent, String child): parent 폴더에 Child 파일을 가리키는 객체 생성
      * File(URI uri): uri 위치를 가리키는 파일 객체 생성
      * File.separator: System 별 파일 구분자 가져오기

* File 경로 표시
  * 절대경로 : 드라이브명 부터 절대적인 경로를 표기하는 방식 -> String.getAbsolutePath()
  * 상대경로 : 현재 작업중인 폴더 위치 기준으로 상대적인 경로 표시File 의 상대 경로 표시 -> System.getProperty("user.dir")

* File 클래스의 주요 메서드
   ![Screen Shot 2022-08-03 at 9 06 23 PM](https://user-images.githubusercontent.com/34419390/182699734-1d98470e-b74d-449a-89b5-83e38d8fc07f.png)


### 자바의 Charset
* ASCII : 영문 알파벳, 숫자, 특수기호, 제어코드로 구성, 나라별 코드 (16개국) 첨가
   * EUC-KR : 한국 산업 규격으로 지정된 한국어 문자 집합, 한글 2350자, 한자 4888자 포함, ASCII 대응 문자는 1byte
   * MS949 : Windows에서 사용되는 한글완성형 표기 (2byte), EUC-KR 에서 누락된 8822자를 포함한 Microsoft에서 도입한 한글 기본 문자셋 -> KS완성형 + ASCII + 누락된 8822자
* Unicode : 하나의 문자셋에 국가별 모든 문자셋 통합
  * Unicde문자열 인코딩 방식
    * UTF-16 : 고정길이 문자 인코딩 방식(2byte), 영문 한글 동일, 저장 문자열 앞에 BOM(Byte order mark) 코드 삽입 (FE FF로 코드가 시작)
    * UTF-8 : 가변 길이 문자 인코딩 방식, 한글은 3byte로 표현, 대부분의 웹서버, 데이터베이스, 리눅스, Mac 시스템의 기본 인코딩 방식

* 문자셋 객체 생성 
  * defaultCharset()
     * 현재 설정되어있는 디폴트 문자셋 리턴 (최소 파일단위까지 지정 가능하나 일반적으로 프로젝트, 워크스페이스 단위로 설정)
     * Window 기본설정은 MS949, MacJVM: UTF-8

  * forName(String charsetName): 매개변수로 넘어온 charsetName의 문자셋 리턴, 지원하지 않는 문자셋의 경우 UnsupportedCharsetException발생
  * isSupported(...): JVM에서 해당 문자셋을 지원하는지 여부 확인

* 명시적 문자셋 지정이 필요한 경우
  * Case1: 문자열 -> byte로 변환하는 경우
  ![Screen Shot 2022-08-03 at 9 46 06 PM](https://user-images.githubusercontent.com/34419390/182708390-56098177-f207-4ae1-ba1c-a72377e89052.png)
  * Case2: byte -> 문자열로 변환하는 경우
  ![Screen Shot 2022-08-03 at 9 46 35 PM](https://user-images.githubusercontent.com/34419390/182708438-7c87d532-7567-4b73-b4dd-f6f1e157eb38.png)

### Java IO의 개념
* FileInputStream / FileOutputStream으로 I/O 객체 생성
  1. InputStream: byte 단위의 입력을 수행하는 추상클래스
  ![Screen Shot 2022-08-03 at 9 55 06 PM](https://user-images.githubusercontent.com/34419390/182709968-9f9e2bbc-61e4-4974-81aa-aa070b3c6dce.png)
    * FileInputStream : File 내용을 byte 단위로 데이터를 읽는 InputStream을 상속한 클래스
    ![Screen Shot 2022-08-03 at 10 01 37 PM](https://user-images.githubusercontent.com/34419390/182711051-081a0d38-1d39-4ea2-a83f-5794b9a4d2b0.png)
    * (File)InputStream 메서드
    (1) int available(), void close()
        * availabe() : 남은 바이트 수를 리턴
        * close() : InputStream 자원 반납 
        * read() : 1-byte단위로 파일 내용을 읽어옴 -> 직접 한글읽기는 불가능
        * read(byte[], int offset, int length): offset -> 읽어온 내용이 저장되는 위치, length -> 파일에서 읽어올 내용의 길이 

  2. OutputStream: byte 단위 출력을 수행하는 추상클래스
  ![Screen Shot 2022-08-03 at 9 57 47 PM](https://user-images.githubusercontent.com/34419390/182710463-74859c7f-75e2-4ffa-a3b5-13702230dab5.png)
  * FileOutputStream
  ![Screen Shot 2022-08-03 at 10 13 41 PM](https://user-images.githubusercontent.com/34419390/182713044-d7050c0b-4908-4f1e-8048-bf176902365c.png)
  * (File)OutputStream 메서드의 활용
    * void write(int b, void flush(), void close()): 파일에 문자열 쓰기

### 콘솔 입, 출력
* System.in : 콘솔의 입력을 처리하는 InputStream 객체, 한 줄 단위로만 입력 처리 
   * ASCII 코드값을 확인하여 역슬래시 문자열이 입력되는 경우를 엔터입력시점이라고 간주
* System.out : 콘솔의 출력을 처리하는 OutputStream 객체, Close()로 자원을 해제하면 이후 콘솔 출력 불가
   * write()메서드는 버퍼에 쓰기를 수행,
   * flush()메서드는 버퍼의 내용을 콘솔로 출력
     * write() 다음에는 Flush() 를 쓰는 버릇을 들여야 함??

### Byte 단위 입출력
* FilterStream의 개념 : 입출력 스트림의 형태 특징의 변경
  1) 입출력 과정에서 메모리 버퍼를 사용함으로서 속도향상 : BufferedInputStream / BufferedOutstream
  2) 다양한 데이터 타입 입출력 : DataInputStream / DataOutpuStream
  ![Screen Shot 2022-08-06 at 12 23 03 AM](https://user-images.githubusercontent.com/34419390/183222990-c77e4643-8fe3-4824-a7a2-9f0acbed984b.png)
  * 다른 종류의 필터 조합해서 사용 가능
    * e.g) BufferedXXXStream + DataXXXStream : 향상된 속도로 다양한 타입의 입출력 수행
  3) 다양한 데이터 출력에 특화 : PrintStream
  * 자동 flush() 기능 제공, System.out의 객체 타입
  ![Screen Shot 2022-08-06 at 12 29 31 AM](https://user-images.githubusercontent.com/34419390/183223367-7250885a-847f-424b-9417-48f38ba546a6.png)

  ### Char 단위의 입출력
  * Reader: char 단위 입력을 수행하는 추상클래스
    * 사용 가능 메서드
    ![Screen Shot 2022-08-07 at 5 24 45 PM](https://user-images.githubusercontent.com/34419390/183300921-cac47cc0-c409-42ef-aa8b-72501a8a80ce.png)
    * 하위 클래스
      * FileReader : 문자 단위로 파일을 읽어옴

      * BufferedReader

      * InputStreamReader
  * Writer: char 단위 출력을 수행하는 추상클래스
    ![Screen Shot 2022-08-07 at 5 26 15 PM](https://user-images.githubusercontent.com/34419390/183300952-a072a912-0cef-4a44-af56-c0c839097a64.png)
    * FileWriter : 해당 경로에 문자 단위로 새 데이터를 입력
    * BufferedWriter
    * OutputStreamWriter
    * PrintWriter

  * FileReader / FileWriter 예시 
  ![Screen Shot 2022-08-07 at 5 29 28 PM](https://user-images.githubusercontent.com/34419390/183301116-49ef1111-20dd-4329-a747-aae1d91d861f.png)

  * BufferedReader / BufferedWriter 예시
  ![Screen Shot 2022-08-07 at 5 32 54 PM](https://user-images.githubusercontent.com/34419390/183301294-0067f9f5-90c7-47b9-bfd5-3fd5079d7960.png)

  * InputStreamReaer / OutputStreamWriter 예시
  ![Screen Shot 2022-08-07 at 5 35 59 PM](https://user-images.githubusercontent.com/34419390/183301481-5a70510c-1e1e-4244-b057-1948771b8b7c.png)
