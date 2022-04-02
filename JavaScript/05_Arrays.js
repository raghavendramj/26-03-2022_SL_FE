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

function deleteMethod(){
    var students = ["Vinay", "Mutalipu", "Shyam"];
    delete students[1];
    console.log("**************After deletion - delete method : ");
    console.log("Students : ", students);
}

// deleteMethod();

function concatMethod(){
    var studentsSet1 = ["Vinay", "Mutalipu"]
    var studentsSet2 = ["Jorge", "Shyam"]

    console.log("studentsSet1.concat(studentsSet2) : ", studentsSet1.concat(studentsSet2));
}

// concatMethod();


function joinMethod(){
    var students = ["Vinay", "Mutalipu", "Jorge", "Shyam"]; 
    console.log("students.join(", ") : ", students.join(", "));
}
// joinMethod();
