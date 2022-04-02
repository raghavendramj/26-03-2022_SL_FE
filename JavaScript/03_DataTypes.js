function testDataTypes(){
    var variable = 10;
    console.log("variable : ", variable, '\nand type of variable is ', typeof(variable));

    variable = "raghav";
    console.log("variable : ", variable, '\nand type of variable is ', typeof(variable));

    variable = true;
    console.log("variable : ", variable, '\nand type of variable is ', typeof(variable));

    variable = {name: 'raghav'};
    console.log("variable : ", variable, '\nand type of variable is ', typeof(variable));

    variable = new Array();
    variable.push('Banana');
    variable.push('Mango'); 
    console.log("variable : ", variable, '\nand type of variable is ', typeof(variable));
}

testDataTypes();