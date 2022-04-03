//MAP
function mapFunction() {
  let numbers = [2, 4, 6, 8];
  console.log("Numbers : ", numbers);

  let squares = numbers.map((number) => number * number);
  console.log("squares : ", squares);

  let names = ["Virat", "Rishabh", "Rahul", "Venkatesh"];
  console.log("Names : ", names);

  let lenOfNames = names.map((name) => name.length);
  console.log("lenOfNames : ", lenOfNames);
}
// mapFunction();

//FILTER
function filterFunction() {
  let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let evenNums = allNumbers.filter((num) => num % 2 == 0);
  console.log("Even Numbers : ", evenNums);

  let oddNums = allNumbers.filter((num) => num % 2 != 0);
  console.log("Odd Numbers : ", oddNums);
}
// filterFunction();

//REDUCE
function reduceFunction() {
  let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // let sumOfNums = allNumbers.reduce((acc, element) => acc+ element);
  let sumOfNums = allNumbers.reduce((accumulator, element) => {
    console.log("accumulator: ", accumulator, " and element: ", element);
    return accumulator + element;
  });
  console.log("Sum of all nums : ", sumOfNums);

  let sumOfNumsWithDifferenStartingNumber = allNumbers.reduce((acc, element) => acc+ element, 143);
  console.log("Sum of all nums : ", sumOfNumsWithDifferenStartingNumber);
}
reduceFunction();
