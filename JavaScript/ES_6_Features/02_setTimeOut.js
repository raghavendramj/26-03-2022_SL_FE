function printValues() {
  console.log("1");

  setTimeout(function () {
    console.log("2");
  }, 2000);

  setTimeout(function () {
    console.log("3");
  }, 0);

  console.log("4");
}
// printValues();

//Problem Statement
function testSetTimeout() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log("Value of i :- ", i);
    }, 1000);
  }
}

// testSetTimeout();

//Solution:- 1
//Using IIFE
function testSetTimeoutUsingIIFE() {
  for (var i = 0; i < 5; i++) {
    (function (i) {
      setTimeout(function () {
        console.log("Value of i :- ", i);
      }, 1000);
    })(i);
  }
}
// testSetTimeoutUsingIIFE();


//Solution:- 2
//Using Let
function testSetTimeoutUsingLet() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
          console.log("Value of i :- ", i);
        }, 1000);
      }
  }
  testSetTimeoutUsingLet();
  