{
  //* Enum: 여러가지의 상수값을 한곳에 모아서 정의할때 씀
  // Javascript ver.
  const MAX_NUM = 6; //변하지 않는 상수값은 전체 대문자로 표기
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY":1, "WEDNESDAY":2}) // freeze: 해당 변수에 할당 가능한 오브젝트를 고정시켜버림
  const dayOfToday = DAYS_ENUM.MONDAY

  // Typescript ver.
  enum Days { //ENUM은 앞글자만 대문자로 쓴다
    Monday, // 별도 값을 지정하지 않으면 자동으로 인덱스가 생성됨 (별도로 지정하지 않으면 0부터 시작)
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
  }
  console.log(Days.Friday) // 4
  const day = Days.Saturday

  // ENUM의 문제점 : ENUM으로 할당된 변수에 다른 값을 다시 덮어쓸 수 있음, 타입이 정확하게 보장되지 않음
  // -> Union type 사용을 권장
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: DaysOfWeek = 'Monday'
  dayOfWeek = 'Monday' //=>'Monday' | 'Tuesday' | 'Wednesday' 중의 한 값만 할당 가능
}