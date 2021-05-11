var isPalindrome = function(s) {
  const regex = '[A-Za-z0-9]'
  let string = [...s].filter (el => el.match(regex)).join('').toLowerCase()
  let answer = true;
 
  let pointer = Math.floor(string.length / 2);
  for (let i = 0; i < pointer; i++) {
      if (string[i] !== string[string.length -1 -i]) {
          answer = false;
      }
  }
  return answer;
};


const isAnagram = function (s, t) {
  let map1 = new Map();
  let map2 = new Map();
  
  for (let x of s) {
      if (map1.has(x)) {
          map1.set(x, map1.get(x)+1);
      } else {
          map1.set(x, 1);
      }
  };
  for (let x of t) {
      if (map2.has(x)) {
          map2.set(x, map2.get(x)+1);
      } else {
          map2.set(x, 1);
      }
  };
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
      testVal = map2.get(key);
      if (val !== testVal || (testVal=== undefined) && !map2.has(key)) {
          return false;
      }
  }
  return true;
}

var reverseString = function(s) {
  let temp;
  let noOfIteration = Math.floor(s.length/2)
  
  for (let i = 0; i < noOfIteration; i++) {
      temp = s[i];
      s[i] = s[s.length-1 -i] 
      s[s.length-1-i] = temp
  }
};

var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
      nums1[i+m] = nums2[i]
  }
  nums1.sort((number1, number2) => {
      return number1 - number2;
  })
};

var countPrimes = function(n) {
  let answer = 0;
  let isPrime = new Array(n+1).fill(true);
  
  for (let i = 2; i*i < n; i++) {
      if(!isPrime[i]) continue;
      for (let j = i * i; j < n; j += i) {
          isPrime[j] = false;
      }
  }
  
  for (let i = 2; i < n; i++) {
      if(isPrime[i]) answer++;
  }
  
  
  return answer;
};