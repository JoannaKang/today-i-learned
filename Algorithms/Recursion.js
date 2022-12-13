// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

function factorial(number) {
    if(number > 1) {
        return number * factorial(number -1)
    } else {
        return 1
    }
}

console.log(factorial(5))


function calculatePower(base, exponent){
    if (exponent === 0 ) {
        return 1
    } else {
        return base * calculatePower(base, exponent-1)
    }
}
console.log(calculatePower(2, 5))

function sumRange(number) {
    if(number > 0) {
        return number + sumRange(number -1)
    } else {
        return 0
    }
}

console.log(sumRange(3))

function contains(obj, searchValue) {
    if(Object.values(obj).includes(searchValue)) {
        return true
    } else {
        const keys = Object.keys(obj)
        for (let index = 0; index < keys.length; index++) {
            const element = keys[index];
            const nextObj = obj[element]
            if(typeof nextObj === 'object') {
                const wasFound = contains(obj[element], searchValue)
                if(wasFound) return true
            }
        }
        return false
    }
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt)
console.log(doesntHaveIt)