let add = (a, b) => {
  return a + b;
};
let subtract = (a, b) => {
  return a - b;
};
let multilply = (a, b) => {
  return a * b;
};

let addition = (a, b, callback) => {
  let sum = callback(a, b);
  console.log("Sum : ", sum);
};

let subtraction = (a, b, callback) => {
  let diff = callback(a, b);
  console.log("Difference : ", diff);
};
let multiplication = (a, b, callback) => {
  let prod = callback(a, b);
  console.log("Product : ", prod);
};

let operate = (a, b) => {
  //addition(a, b, add);
  addition(a, b, (a, b) => {
    // subtraction(a, b, subtract);
    subtraction(a, b, (a, b) => {
      // multiplication(a, b, multilply)
      multiplication(a, b, (a, b) => {
        return a * b;
      });
      return a - b;
    });
    return a + b;
  });
};

operate(45, 23);
