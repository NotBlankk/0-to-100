/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  let prom1 = new Promise(function (resolve) {
    setTimeout(resolve, t * 1000);
  });
  return prom1;
}

function wait2(t) {
  let prom2 = new Promise(function (resolve) {
    setTimeout(resolve, t * 1000);
  });
  return prom2;
}

function wait3(t) {
  let prom3 = new Promise(function (resolve) {
    setTimeout(resolve, t * 1000);
  });
  return prom3;
}

function calculateTime(t1, t2, t3) {
  let lol = Date.now();

  let p1 = wait1(t1);
  let p2 = wait2(t2);
  let p3 = wait3(t3);

  let ans = Promise.all([p1, p2, p3]).then(function () {
    let lol2 = Date.now();
    return lol2 - lol;
  });
  return ans;
}

module.exports = calculateTime;
