function testingVar() {
  var num1 = 10;
  console.log("First number :- ", num1);

  var num1 = 20;
  console.log("Again First number :- ", num1);
}
// testingVar();

function testingLet() {
  let num1 = 10;
  console.log("First number :- ", num1);

//   let num1 = 20;
//   console.log("Again First number :- ", num1);
}
// testingLet();


//Hositing won't work when we use let or const keywords.
function letAgainstHoisting(){
  console.log(a);
  let a;
}

letAgainstHoisting();