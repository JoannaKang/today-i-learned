const str = "101001";

function checkPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  let array = [...str];
  let noOfSwap = 0;
  while (left < str.length / 2) {
    if (array[left] !== array[right]) {
      let temp = array[left];
      array[left] = array[left + 1];
      array[left + 1] = temp;
      left++;
      right--;
      noOfSwap++;
    } else if (left > str.length / 2 && !isPalindrome(array.join(""))) {
      return -1;
    } else {
      return noOfSwap;
    }
  }
}

function isPalindrome(str) {
  let counter = 0;
  let check = true;
  const totalLength = str.length;

  while (counter < totalLength / 2) {
    console.log(str[counter], str[totalLength - 1 - counter]);
    if (str[counter] !== str[totalLength - 1 - counter]) {
      return false;
    } else {
      counter++;
    }
  }
  if (check) return true;
}

console.log(checkPalindrome(str));
