/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let l1 = str1.length;
  let l2 = str2.length;
  if (l1 != l2) {
    return false;
  }
  str1 = str1.split(" ").join("");
  str1 = str1.toLowerCase();
  str1 = str1.split("").sort();

  str2 = str2.split(" ").join("");
  str2 = str2.toLowerCase();
  str2 = str2.split("").sort();

  for (let i = 0; i < l1; i++) {
    if (str1[i] != str2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
