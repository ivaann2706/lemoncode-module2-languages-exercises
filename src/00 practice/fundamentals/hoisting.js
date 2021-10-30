console.log("*** Hoisting ***");

// Section A
function f1() {
  console.log(a1); // undefined
  console.log(g1()); // undefined

  var a1 = "good job!";
  function g1() {
    return a1;
  }
  console.log(a1); // good job!
}

f1();

// Section B
var a2 = 1;

(function () {
  console.log(a2); // undefined
  var a2 = 2;
  // b2 = 4; // error
  var c2 = 3;
})();

console.log(a2);
// console.log(b2);  // error
// console.log(c2);

// Section C
f3();
var a3 = 1;

function f3() {
  console.log(a3); // undefined
  // b3 = 4; // error
  var c3 = 3;
}

console.log(a3);
// console.log(b3);
// console.log(c3);
