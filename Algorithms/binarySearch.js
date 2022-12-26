var seedrandom = require("seedrandom");
var myrng = new seedrandom("hello.");

function randomInteger() {
  const randMax = 100000000;
  return Math.floor(myrng() * randMax);
}

const numDataCount = 100000;
const numData = [];
for (let i = 0; i < numDataCount; ++i) {
  numData.push(randomInteger());
}
numData.sort((a, b) => a - b);

// Find the largest number in the array that's less than 10000.
// Slow method using linear search:
console.time("linearSearch");
let answer = -1;
numData.forEach((num) => {
  if (num < 10000 && num > answer) {
    answer = num;
  }
});
console.log("Answer found using linear search: ", answer);
console.timeEnd("linearSearch");

// Fast method using binary search
function halveArr(arr, middle) {
  let halfArr;
  if (arr[middle] < 10000) {
    halfArr = arr.slice(middle);
  } else {
    halfArr = arr.slice(0, middle);
  }
  return halfArr;
}

console.time("binarySearch");
let resArr = numData;

// while (true) {
//   const middle = Math.floor(resArr.length / 2);
//   resArr = halveArr(resArr, middle);
//   if (resArr[middle] < 10000) break;
// }

function getAnswer(arr) {
  if (arr.length > 1) {
    const middle = Math.floor(arr.length / 2);
    return getAnswer(halveArr(arr, middle));
  } else {
    return arr[0];
  }
}

console.log("🟡", getAnswer(resArr));
console.timeEnd("binarySearch");
