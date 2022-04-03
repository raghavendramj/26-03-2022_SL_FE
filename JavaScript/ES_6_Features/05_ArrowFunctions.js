//Normal Function
function sayHello() {
  console.log("Normal Function :- Welcome to the class");
}
sayHello();

//Function Expression
let functionExpression = function () {
  console.log("Function Expression:- Welcome to the class");
};
functionExpression();

//Arrow Function
let arrowFunc = () => {
  console.log("Arrow Function:- Welcome to the class");
};
arrowFunc();

//Arrow Function
let addNumbers = (a, b, c) => {
  return a + b + c;
};

console.log("Result : ", addNumbers(30, 10, 20));
