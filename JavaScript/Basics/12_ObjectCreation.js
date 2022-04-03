//1st Way to create object -> Factory function!
function createCircle(radius){
    return {
        radius,
        draw : function(){
            console.log('Factory function - Circle of radius', radius);
        }
    }
}

var factCircle = createCircle(10);
factCircle.draw();

//2nd Way to create object -> Constructor function!
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Constructor function - Circle of radius', radius);

    }
}

var circle1 = new Circle(10);
//1. -> new operator -> create a empty object {}
//2 -> it will set this to point to that current object -> this ->  {}
//3. returns the object from the function.   this -> {radius: 10, draw: function(){}} 
// => happens automatically!
console.log(circle1);


function Employee(id, fname, lname, city){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.city = city;
    this.fullName = function() {
        return this.fname + " "+ this.lname;
    }    
}

var employee = new Employee(1, 'raghav', 'mj', 'bangalore');
console.log("employee :- ", employee);