let person = {
    firstName : 'Raghav',
    lastName : 'M J ',
    get : function() {
        console.log("GET FUNCTION: ", this);
        console.log("Outer : ", this.firstName + " "+ this.lastName);
        let print = function() {
            console.log("print FUNCTION: ", this);
            console.log("Outer : ", this.firstName + " "+ this.lastName);
        }
        print();
    }
}; 

person.get();

let personArrow = {
    firstName : 'Raghav',
    lastName : 'M J ',
    get : function() {
        console.log("GET FUNCTION: ", this);
        console.log("Outer : ", this.firstName + " "+ this.lastName);
        let print = () => {
            console.log("print FUNCTION: ", this);
            console.log("Outer : ", this.firstName + " "+ this.lastName);
        }
        print();
    }
}; 

personArrow.get();