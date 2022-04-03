let add = (a, b) => {
  return a + b;
};
let subtract = (a, b) => {
  return a - b;
};
let multilply = (a, b) => {
  return a * b;
};

let operate = (a, b, callBackFunction) => {
  let result = callBackFunction(a, b);
  console.log("result ", result);
};

operate(10, 20, add);
operate(10, 20, multilply);
operate(40, 20, subtract);