let person = {
  firstName: "John",
  //   middleName: "Middle",
  lastName: "Doe",
};

function typicalWay() {
  let firstName = person.firstName;
  let lastName = person.lastName;
  console.log("Typical Way : firstName : ", firstName);
  console.log("Typical Way : lastName : ", lastName);
}
// typicalWay();

function usingObjectDest() {
  let { firstName, lastName } = person;
  console.log("Object Dest firstName : ", firstName);
  console.log("Object Dest lastName : ", lastName);

  //let { property1: variable1, property2: variable2 } = object;
  let { firstName: fName, lastName: lName } = person;
  console.log("Object Dest fName : ", fName);
  console.log("Object Dest lName : ", lName);
}
// usingObjectDest();
function defaultValues() {
  let { firstName, middleName = "", lastName } = person;
  console.log("Object Dest firstName : ", firstName);
  console.log("Object Dest middleName : ", middleName);
  console.log("Object Dest lastName : ", lastName);
}
// defaultValues();

function destNullObejct() {
  function getPerson() {
    return null;
  }

  //TypeError: Cannot destructure property 'firstName' of 'getPerson(...)' as it is null.
  //   let { firstName, lastName } = getPerson();
  let { firstName, lastName } = getPerson() || {};
  console.log("Object Dest firstName : ", firstName);
  console.log("Object Dest lastName : ", lastName);
}

// destNullObejct();

function nestedObjectDest() {
  let employee = {
    id: 1001,
    name: {
      firstName: "John",
      lastName: "Doe",
    },
  };

  let {
    name: { firstName, lastName },
  } = employee;
  console.log("firstName -> ", firstName);
  console.log("lastName -> ", lastName);
}

nestedObjectDest();
