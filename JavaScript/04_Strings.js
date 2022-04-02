function esacpeExample() {
  var stmt1 = 'My name is "John Doe"';
  console.log(stmt1);
  var stmt2 = "My name is 'John Doe'";
  console.log(stmt2);
}
// esacpeExample();

function indexMethods() {
  var str = "hello world";
  console.log("Length of str :- ", str.length);
  console.log("indexOf world :- ", str.indexOf("world"));

  str = "hello world hello javascript hello css";
  console.log("indexOf hello :- ", str.indexOf("hello"));
  console.log("lastIndexOf hello :- ", str.lastIndexOf("hello"));

  str = "I have visited delhi";
  console.log("lastIndexOf i :- ", str.lastIndexOf("i"));
}
// indexMethods();

function subStringMethods() {
  var str = "my favorite country is India";
  //first param -> start(inclusive), second -> end(exclusive)
  console.log("str.substring(3, 11):- ", str.substring(3, 11));

  //first param -> start, second -> length
  console.log("str.substr(3, 11):- ", str.substr(3, 11));
}
// subStringMethods();

function replaceMethods() {
  var str =
    "my favorite city is banGAlore and its a nice place and bangalore weather is really great";
  var out = str.replace(/Bangalore/gi, "Mumbai");
  console.log("str.replace(/Bangalore/gi, 'Mumbai') :- ", out);
}

// replaceMethods();

function sliceMethods() {
  var str = "my favorite country is India";
  console.log("str.slice(12, 19) :- ", str.slice(12, 19));
  console.log("str.slice(12, 19) :- ", str.slice(23));
}
sliceMethods();
