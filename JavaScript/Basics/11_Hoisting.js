//Variable Hoisting
function hoistingTest(){ 
    console.log("First : ", a);
    var a;
    console.log("Second : ", a);
    a = 10;
    console.log("Third : ", a);
}
hoistingTest();


//Function Hoisting
subtract(30, 20);
function subtract(a, b){
    console.log('Result :- ', (a-b));
} 