// es6

let count = 0;

export function increase () {
  count++;
}

export function getCount () {
  return count;
}


// 노드를 사용한 export
// module.exports.getCount = getCount;
// module.exports.increase = increase;


// 참고
// console.log(module.exports === exports); // exports에 아무것도 할당되어 있지 않은경우 module은 생략 가능
// exports = {}; // 하지만 exports에 무언가 할당되어있다면
// console.log(module.exports === exports) // 더이상 module을 생략할 수 없다
// exports.increase();