/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length == 0) {
    return true;
  }
  str = str.replaceAll("?", "");
  str = str.replaceAll("!", "");
  str = str.replaceAll(",", "");
  str = str.replaceAll(".", "");
  str = str.toLowerCase();
  str = str.split(" ").join("");
  // console.log(str);
  let str2;
  str2 = str.split("").reverse().join("");
  // console.log(str2);

  for (let i = 0; i < str.length; i++) {
    if (str[i] != str2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
