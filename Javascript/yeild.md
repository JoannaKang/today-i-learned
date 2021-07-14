* yeild: es6부터 추가된 비동기 처리 문법
  * function 뒤에 *을 붙이면 generator function이라 불리는 함수 형태가 됨
  * yeild라는 키워드를 사용하면 해당 라인까지만 코드를 실행하고 뒷부분은 다시 실행을 요청할때까지 실행하지 않게 함 
    * 마치 함수가 실행중에 특정부분에서 일시정지 된 것처럼 동작하게 비동기 처리를 할 수 있음
    * generator function을 호출하는 외부 함수(=caller)에서 next()를 실행시킬 때 마다 yield로 나눠진 곳들이 하나씩 실행됨