type PositionType = {
  x:number;
  y: number;
}

interface PositionInterface {
  x:number;
  y:number;
}

// object
const obj1: PositionType= {
  x:1,
  y:1
}

const obj2: PositionInterface = {
  x:1,
  y:1
}

// class
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & {z: number};

// Only Interface can be merged🌟
interface PositionInterface {
  z: number
}

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
}

type Name = Person['name']; //string
type NumberType = number;
type Direction = 'left' | 'right'; // union type은 type으로만 설정할 수 있음 (interfac는 안됨)

// Interface와 type의 차이?
// Interface: 누군가가 같은 자료타입을 구현할 수 있도록 규격사항을 정의
// type: 자료를 담을 목적으로 선언하는 변수라면 type을 활용