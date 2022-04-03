function greet(){
    let msg = 'Welcome';
    function sayHi(){
        //CLOSURE -> Preserving the outer function's variable in current scope!
        console.log(msg);
    }
    return sayHi;
}

var salartOfEmployee = (function(){
    var salary = 10000;
    function change(amount){
        salary += amount;        
        console.log("Current Salary :- ", salary);
    }
    return {
        raise: function(val){
            change(val);
        },
        lower: function(val){
            change(-val);
        },
        currentSal : function(){
            return salary;
        }
    }
})();