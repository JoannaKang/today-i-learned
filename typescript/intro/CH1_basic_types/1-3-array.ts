{
  // Array
  const fruits: string[] = ['🍅', '🍌']; // 둘 다 똑같은 어레이 자료형 선언
  const scores: Array<number> =[1,2,3]; 
  //readonly 옵션을 쓸때는 string[] 이 형태로만 써야해서 코드의 일관성을 위해 이 형태로 어레이를 선언하는걸 권장
  function printArray(fruits: readonly string[]) {}

  // Tuple: 여러 타입의 어레이를 선언 가능 -> interface, type alias, class를 활용해 코드의 가독성을 위해 오브젝트 형태로 자료를 가공하는걸 권장
  let student: [string, number];
  student = ['name', 123];
  student[0] // 가독성이 💩
  student[1]
  const [name, age] = student; //array destructuring으로 좀 더 명확하게 자료형을 나타낼 수 있음
}