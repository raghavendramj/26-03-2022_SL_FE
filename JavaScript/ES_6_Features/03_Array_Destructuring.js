function arrayDest() {
  function getScores() {
    return [45, 55, 20, 30, 56, 78, 12, 62];
  }

  let scores = getScores();

  let x = scores[0];
  let y = scores[1];
  let z = scores[2];
  console.log("X =", x);
  console.log("Y =", y);
  console.log("Z =", z);
  console.log("\n**********************************");

  let [a, b, c, ...rest] = getScores();
  console.log("A =", a);
  console.log("B =", b);
  console.log("C =", c);
  console.log("Others =", rest);
}

// arrayDest();

function defaultValueDestructureArray(){
    console.log("\n*********Default Values***********");
    let myArray = [45, 55, 67];
    let [a, b, c=2, d=5] = myArray;
    console.log("A =", a);
    console.log("B =", b);
    console.log("C =", c);
    console.log("D =", d);
}
defaultValueDestructureArray();