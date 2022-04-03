//Basic Function
function sayHello(){
    console.log("Basic Function");
}
sayHello();

//Function Expression -> Anonymous function
var sayHello = function(){
    console.log("Function Expression!");
}
sayHello();

//Immediatly Invoked Function Expression
(function(){
    console.log("Immediatly Invoked Function Expression!");
})();

console.log("\n------------------------------------------")

function add(a, b) {
    return a + b;
} 

let addVar = function(a, b) {
    return a + b;
}

console.log("Basic Function : ", add(10, 20));
console.log("Function Expression : ", addVar(10, 20));

(function(a, b) {
    console.log("Immediatly Invoked Function Expression : ", (a + b));
    return a + b;
})(10, 20);