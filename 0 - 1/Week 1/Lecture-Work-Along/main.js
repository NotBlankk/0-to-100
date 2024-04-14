// console.log("Hello World");
// console.log(a);

// //1 Write a program to greet a person given their first and last name
// let firstName = "Harry";
// let lastName = "Lewis";

// console.log(`${firstName} ${lastName}`);

// //2 Write a program that greets a person based on their gender

// let gender = "Male";
// if (gender == "Male") {
//   console.log("Hello Mister");
// } else {
//   console.log("Hello Madam");
// }

// //3 write a program that counts from 1 to 1000 and prints
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }

// Array
// //1 Write a program to print all even numbers in an array
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] % 2 == 0) {
//     console.log(arr1[i]);
//   }
// }

// //2 write a program to print the biggest number in an array
// let arr1 = [1, 2, 10, 34, 345, 654, 43];
// let largest = 0;
// for (let i = 0; i < arr1.length; i++) {
//   largest = Math.max(arr1[i], largest);
// }
// console.log(largest);

//3 Write a program that prints all male people;s name first given a complex object

// // 4 Write a program that reverses all the elments of an array
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [];
// for (let i = arr1.length - 1; i >= 0; i--) {
//   arr2.push(arr1[i]);
// }
// console.log(arr2);
// let sum = 0;
// for (let i = 0; i < 100000000000; i++) {
//   sum = sum + 1;
// }
// console.log(sum);

// function reverseEachElement(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(String(array[i]).split("").reverse());
//     array[i] = String(array[i]).split("").reverse().join("");
//   }
//   return array;
// }

// const array = [123, "world"];
// const reversedArray = reverseEachElement(array);

// console.log(reversedArray);

function isAnagram(str1, str2) {
  // let lol1 = str1.split("");
  // // console.log(lol1);
  // let arr1 = [];
  // for (let i = 0; i < lol1.length; i++) {
  //   arr1[lol1[i] - "a"]++;
  // }
  // console.log(arr1);

  // let lol2 = str2.split("");
  // // console.log(lol2);
  // let arr2 = [];
  // for (let i = 0; i < lol2.length; i++) {
  //   arr2[lol2[i] - "a"]++;
  //   console.log(lol2[i] - "a");
  // }
  // console.log(arr2);
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
let ans = isAnagram("Debit Card", "Bad Credit");
console.log(ans);
