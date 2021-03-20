// default: 다른데서 임포트할때 함수 이름을 변경해서 선언 가능, {} 없이도 선언 가능, 한 파일에서는 한번밖에 못씀
export function add(a,b) { 
  return a + b;
} // 타입을 모듈로 정의하지 않으면 글로벌 스코프로 등록됨


export function print() {
  console.log('print');
  
} // 다른 파일에서 임포트할때 {} 안에 같은 함수 이름으로 선언해줘야 함

export const number = 10;