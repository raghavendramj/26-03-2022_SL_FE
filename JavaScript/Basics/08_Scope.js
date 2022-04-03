function topFunc() {
  var one = 24;
  firstInner();
  function firstInner() {
    var two = 12;
    secondInner();
    function secondInner() {
      var three = 6;
      console.log("One -> ", one);
      console.log("two -> ", two);
      console.log("three -> ", three);
    }
  }
}

topFunc();