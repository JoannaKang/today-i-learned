// 상속하는 데이터 타입에 따라 선언되는 변수의 타입을 결정할 수 있다.

type Check<T> = T extends string? boolean : number;
type Type = Check<string> // boolean

type TypeName<T> = T extends string
? 'string'
: T extends number
? 'number'
: T extends boolean
? 'boolean'
: T extends undefined
? 'undefined'
: T extends Function
? 'funtion'
: 'object';

type T0 = TypeName<string>; // string
type T1 = TypeName<'a'>; // string
type T2 = TypeName<() => void>; // function
