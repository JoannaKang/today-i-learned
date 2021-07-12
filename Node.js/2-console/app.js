// log level
console.log('log') // 개발단계 디버깅
console.info('info') // 중요한 정보를 로그로 남기고 싶을 때
console.warn('warn') // 경고
console.error('error') // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same')
console.assert(2 === 2, 'same')

// print object
const student = {name: 'ellie', age: 20, company:{name: 'AC'}}
console.log(student);
console.table(student);
console.dir(student, {showHidden: true, colors: false, depth: 2}); // depth: nested 된 오브젝트를 보고싶은 단계 지정 가능

// measuring time
console.time('for loop'); // 성능을 확인할 때
for (let i = 0; i < 10; i++) {
  i++
}
console.timeEnd('for loop') // 해당하는 라벨의 콘솔이 실행되는데 걸리는 시간 측정

// counting
function a () {
  console.count('a function')
}

a();
a();

a();
console.countReset('a function'); // 카운팅 횟수 리셋
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace();
}
f1();