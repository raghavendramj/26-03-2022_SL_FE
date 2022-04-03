function objectExample() {
  var person = {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    address: {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
  };
  //   console.log(person);
  console.log("person.firstName :- ", person.firstName);
  console.log("person['lastName'] :- ", person["lastName"]);
  let ageString = "age";
  console.log("person[ageString] :- ", person[ageString]);
  console.log("person.fullName() :- ", person.fullName());

  for (let prop in person) {
    console.log("Key:-", prop, " -> Value:-", person[prop]);
  }
}
objectExample();
