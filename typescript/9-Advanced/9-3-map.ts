type Video = {
  title: string;
  author: string;
};

type Optional<T> = { // 아무 타입이나 받아올 수 있도록 선언
  [P in keyof T]?: T[P] // === for ... in = T 타입에 있는 모든 key들을 P에 할당한다
}

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P]
}

type VideoOptional = Optional<Video>;

const videoOp: VideoOptional = {
  // animal: video 타입 안에 선언되지 않은 프로퍼티는 할당할 수 없음
}

type Animal = {
  name: string;
  age: number;
}

const animal: Optional<Animal> =  { // animal 타입을 Optional 타입에 매핑하여 옵셔널 타입을 생성
  name: 'dog'
}

const video: ReadOnly<Video> = {
  title: 'hi',
  author: 'ellie'
}
// video.author = // readonly로 선언된 변수들은 추후에 변경이 불가능함

type Nullable<T> = { [P in keyof T]: T[P] | null };
const obj2: Nullable<Video> = {
  title: 'hi',
  author: null // nullable 타입으로 선언된 오브젝트 안의 프로퍼티는 null 로도 선언할 수 있어진다
}
