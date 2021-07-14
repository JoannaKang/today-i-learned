function *call () {
  console.log('execute 1');
  yield 10;
  console.log('execute 2');
  yield (10+20);
  console.log('execute 3');
  yield(30*3);
}


// 사용법 1
// generator 함수를 변수에 할당 후 next로 yeild 포인트를 호출
let gen = call();

// 생성된 generator 함수에 next가 호출될때마다 yeild에 break point가 걸리는 것
// console.log(gen.next()); 
// console.log(gen.next());
// console.log(gen.next());


// 사용법 2
// for loop 안에서 generator 함수를 호출 후 순회하며 값을 읽음
for (let result of call()) {
  let res = result
  console.log(res);
}