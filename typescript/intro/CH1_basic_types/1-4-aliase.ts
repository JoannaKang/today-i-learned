{
  // *Type aliases: 새로운 타입을 임의로 지정하는 것
  type Text = string;
  const name: Text = 'ellie'
  const address: Text = 'korea'
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12
  };

  // *String Literal types
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';
}