function includes(array, value) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return true;
    }
  }
  return false;
}

function includes2(array, value) {
  return array.indexOf(value) !== -1;
}
// Ejemplo:
console.log("*** Includes ***");
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

console.log(includes2([1, 2, 3], 3)); // true
console.log(includes2([1, 2, 3], 0)); // false
