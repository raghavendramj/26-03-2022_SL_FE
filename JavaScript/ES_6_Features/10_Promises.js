let addition = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length != 2) {
      reject("Not enough numbers to add");
    } else {
      let sum = arr[0] + arr[1];
      console.log("Sum : ", sum);
      resolve(arr);
    }
  });
};

let subtraction = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length != 2) {
      reject("Not enough numbers to add");
    } else {
      let diff = arr[0] - arr[1];
      console.log("Difference : ", diff);
      resolve(arr);
    }
  });
};

let multiplication = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length != 2) {
      reject("Not enough numbers to mulitply");
    } else {
      let prod = arr[0] * arr[1];
      console.log("Product : ", prod);
      resolve(arr);
    }
  });
};

let promise = addition([34, 13]);
promise.then(
  (numbers) =>
    console.log("Successfully completed the operations for :-", numbers),
  (customError) => console.log("Error occurred :- ", customError)
);

//Promise Chaining
console.log("\n\n *************** Promise Chaining...")
promise.then(subtraction).then(multiplication).catch((error) => console.log("Error occurred :- ", error));

