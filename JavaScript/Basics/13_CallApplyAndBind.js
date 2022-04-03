function greet(){
    console.log('Welcome to Simplilearn!');
}
greet();
greet.call();

function addition(a, b){
    return a + b + this.c + this.d;
}

console.log("result normal", addition(30, 20));
let dummyObj = {c: 10, d: 20}; 
console.log("result using call", addition.call(dummyObj, 30, 20)); 
console.log("result using apply", addition.apply(dummyObj, [30, 20])); 


var addTenEveryTime = addition.bind({c: 5, d: 5});
console.log("addTenEveryTime(20, 30) : ", addTenEveryTime(20, 30));
console.log("addTenEveryTime(50, 30) : ", addTenEveryTime(50, 30));