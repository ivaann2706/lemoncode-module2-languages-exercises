console.log("*** Array Operations ***");

// Apartado A
// Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const head = (array) => {
  const [first] = array;
  return first;
};
console.log(head([1, 2, 3, 4, 5])); // 1
console.log(head(["one", "two", "three"])); // one
console.log(head("one")); // o

// Apartado B
// Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = (array) => {
  const [, ...tail] = array;
  return tail;
};
console.log(tail([1, 2, 3, 4, 5])); // [2, 3, 4, 5]
console.log(tail(["one", "two", "three"])); // ['two', 'three']
console.log(tail("one")); // ne

// Apartado C
// Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece `Array.prototype`.
const init = (array) => array.slice(0, -1); // Implementation here.
console.log(init([1, 2, 3, 4, 5])); // [1, 2, 3, 4]
console.log(init(["one", "two", "three"])); // ['one', two']
console.log(init("one")); // on

// Apartado D
// Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = (array) => array[array.length - 1];
console.log(last([1, 2, 3, 4, 5])); // 5
console.log(last(["one", "two", "three"])); // three
console.log(last("one")); // e
