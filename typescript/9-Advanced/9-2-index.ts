{
  const obj = {
    name: 'ellie'
  }

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  }

  type Name = Animal['name']; // string : animal의 name 프로퍼티에 있는 타입을 할당한다는 의미
  const text:Name = 'hello';

  type Gender = Animal['gender']; //'male' | 'female'

  type Keys = keyof Animal; // name | age | gender => animal의 프로퍼티를 타입으로 활용
  const key:Keys = 'gender'

  type Person = {
    name: string;
    gender: Animal['gender']
  }
  const person: Person = {
    name: 'joanna',
    gender: 'female'
  }
}