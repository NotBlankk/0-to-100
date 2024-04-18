//? Assignments Solution Week 2
//* EASY
//! 1-counter
// counter = 0;
// limit = 5;
// function counterfxn() {
//   if (counter < limit) {
//     counter++;
//     console.log(counter);
//   } else {
//     console.log("END");
//   }
// }
// setInterval(counterfxn, 1000);
//! 2-counter
// let counter = 0;
// function counterKeeper() {
//   console.log(counter);
//   counter = counter + 1;
//   timeout = setTimeout(counterKeeper, 1000);
// }
// counterKeeper();
//! 3-read-from-file
// let fs = require("fs");
// fs.readFile("0-1/Week 2/a.txt", function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data.toString());
// });
// let ans = 0;
// for (let i = 0; i < 10000000000; i++) {
//   ans = ans + 1;
// }
// console.log(ans);
//! 4 write to file (with and without deleting data inside)
// let fs = require("fs");
// fs.readFile("0-1/Week 2/a.txt", function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data.toString());
// });

// let data = " HELLO FROM OUTSIDE OF THE FILE";
// fs.writeFile("0-1/Week 2/a.txt", data, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Data written to file");
// });

// fs.appendFile("0-1/Week 2/a.txt", "\n Hello, world!", function (err) {
//   if (err) throw err;
//   console.log("The data was appended to the file successfully!");
// });

//* MEDIUM

//! 1-file-cleaner
// let fileData;

// let fs = require("fs");

// fs.readFile("0-1/Week 2/a.txt", function (err, data) {
//   if (err) {
//     return console.error("ERR");
//   } else {
//     fileData = data.toString();

//     fileData = fileData.replace(/\s{2,}/g, " ").trim();

//     fs.writeFile("0-1/Week 2/a.txt", fileData, function (err) {
//       if (err) {
//         throw err;
//       }
//       console.log("Done");
//     });
//   }
// });
//! 2-clock
// let counter = 0;
// function counterKeeper() {
//   let today = new Date();
//   let hr = today.getHours();
//   let min = today.getMinutes();
//   let secs = today.getSeconds();
//   //   console.log(today);
//   console.log(`${hr}:${min}:${secs}`);
//   timeout = setTimeout(counterKeeper, 1000);
// }
// counterKeeper();
