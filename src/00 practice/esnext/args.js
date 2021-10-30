function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}

console.log("*** Args ***");
// Section A
f("JS rocks!", { b: "b" });
// 2
// JS rocks! true
// b false
// 100 false

// Section B
f({ b: "b" });
// 1
// { b: 'b' } true
// undefined true
// 100 false

// Section C
// f("JS sucks!", null, 13);  // it is commented so that it does not fail
// Uncaught TypeError: Cannot read properties of null (reading 'b')
