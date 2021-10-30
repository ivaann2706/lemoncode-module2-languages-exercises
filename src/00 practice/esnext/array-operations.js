console.log("*** Array Operations ***");

const array1 = [1, 2, 3, 4, 5];
const array2 = ["one", "two", "three"];
console.log("array1", array1);
console.log("array2", array2);

// Apartado A
// Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const head = (array) => {
  const [first] = array;
  return first;
};
console.log("--> head");
console.log("head(array1):", head(array1)); // 1
console.log("head(array2):", head(array2)); // one

// Apartado B
// Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = (array) => {
  const [, ...tail] = array;
  return tail;
};
console.log("--> tail");
console.log("tail(array1):", tail(array1)); // [2, 3, 4, 5]
console.log("tail(array2):", tail(array2)); // ['two', 'three']

// Apartado C
// Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece `Array.prototype`.
const init = (array) => array.slice(0, -1); // Implementation here.
console.log("--> init");
console.log("init(array1):", init(array1)); // [1, 2, 3, 4]
console.log("init(array2):", init(array2)); // ['one', two']

// Apartado D
// Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = (array) => array[array.length - 1];
console.log("--> last");
console.log("last(array1):", last(array1)); // 5
console.log("last(array2):", last(array2)); // three
