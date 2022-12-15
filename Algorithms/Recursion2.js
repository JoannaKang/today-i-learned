function sumRange(number) {
    if (number > 0) {
       return number + sumRange(number-1)
    } else {
        return 0
    }
}

console.log(sumRange(3))

function powerOfNum(base, exponent) {
    if (exponent === 0) {
        return 1
    } else {
        return base * powerOfNum(base, exponent-1)
    }
}

console.log(powerOfNum(2,5))


function factorial(number) {
    if(number > 0) {
        return number * factorial(number-1)
    } else {
        return 1
    }
}

console.log(factorial(5))

function all(arr, callback) {
    console.log(arr)
    const result = callback(arr[0])

    if(arr.length > 1) {
        return all(arr.slice(1), callback) && result 
    } else {
        return result
    }
}

function all2(arr, callback) {
    let result = true
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        result = result && callback(element)
    }
    return result
}

var allAreLessThanSeven = all2([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven);

function productOfArray(arr) {
    const silceArr = arr.slice(1)

    if (silceArr.length > 0) {
        return arr[0] * productOfArray(silceArr)
    } else {
        return arr[0]
    }
}
var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

console.log(six, sixty)
