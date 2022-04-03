function basicsOfArray() {
  var students = ["Vinay", "Mutalipu", "Shyam", "Jorge", "Celicia"];
  console.log("students : ", students);
  console.log("students[4] :- ", students[4]);
  console.log("typeof(students) :-", typeof students);
  console.log("length :-", students.length);
  console.log("Last Element in the array  :-", students[students.length - 1]);
}
// basicsOfArray();

function insertAndDeleteFromEnd() {
  var students = ["Vinay", "Mutalipu", "Shyam"];
  console.log("Students : ", students);

  students.push("Jorge");
  students.push("Celicia");

  console.log("**************After addition - From End : ");
  console.log("Students : ", students);

  students.pop();
  students.pop();
  students.pop();
  students.pop();

  console.log("**************After deletion - From End : ");
  console.log("Students : ", students);
}

// insertAndDeleteFromEnd();

function insertAndDeleteFromBeginning() {
  var students = ["Vinay", "Mutalipu", "Shyam"];
  console.log("Students : ", students);

  students.unshift("Jorge");
  students.unshift("Celicia");

  console.log("**************After addition - From End : ");
  console.log("Students : ", students);

  students.shift();
  students.shift();
  students.shift();
  students.shift();

  console.log("**************After deletion - From End : ");
  console.log("Students : ", students);
}
// insertAndDeleteFromBeginning();

function deleteMethod() {
  var students = ["Vinay", "Mutalipu", "Shyam"];
  delete students[1];
  console.log("**************After deletion - delete method : ");
  console.log("Students : ", students);
}

// deleteMethod();

function concatMethod() {
  var studentsSet1 = ["Vinay", "Mutalipu"];
  var studentsSet2 = ["Jorge", "Shyam"];

  console.log(
    "studentsSet1.concat(studentsSet2) : ",
    studentsSet1.concat(studentsSet2)
  );
}

// concatMethod();

function joinMethod() {
  var students = ["Vinay", "Mutalipu", "Jorge", "Shyam"];
  console.log("students.join(", ") : ", students.join(", "));
}
// joinMethod();

function spliceExamples() {
  //SPLICE Takes
  // 1 -> POSITION where new elements are added
  // 2 -> how many now of elements needs to removed from above position(first param)
  // 3,... -> new elements that are added to the array.

  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  console.log(cities);

  //Removal Case.
  cities.splice(1, 3);
  console.log("After cities.splice(1, 3) :-", cities);

  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  //Removal Case, ONLY ONE PARAM
  cities.splice(1);
  console.log("After cities.splice(1) :-", cities);

  cities = ["Bangalore", "Mysore", "Chennai"];
  //Addition case.
  cities.splice(2, 0, "Kerala", "Gujurat");
  console.log("After cities.splice(2, 0, 'Kerala', 'Gujurat') :-", cities);

  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  console.log("----> Before cities.splice(3, 2, 'Lucknow', 'MP') ", cities);
  //Both Addition and removal case.
  cities.splice(3, 2, "Lucknow", "MP");
  console.log("----> After cities.splice(3, 2, 'Lucknow', 'MP') :-", cities);
}

// spliceExamples();

function sliceMethods(){
  var cities = [ 'Bangalore', 'Mysore', 'Chennai', 'Mumbai', 'Kolkota', 'Hyderabad', 'Delhi' ]; 
  console.log("cities.slice(0, 3) :- ", cities.slice(0, 3));
  console.log("cities.slice(2, 5) :- ", cities.slice(2, 5));
}
sliceMethods();