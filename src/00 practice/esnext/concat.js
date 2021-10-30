console.log("*** Concat ***");

// Apartado A
// Implementa una función `concat`, tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread.
//**TIP**: Se hace en 1 línea. No utilices el método `Array.prototype.concat()`.
const concat = (a, b) => [...a, ...b]; // Implementation here.
console.log("concat([1, 2, 3], [4, 5, 6]):", concat([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// Apartado B
// Repite el ejercicio anterior suponiendo cualesquiera arrays de entrada (no te limites solamente a 2).
const concatMulti = (...a) => {
  const result = [];
  a.forEach((b) => {
    result.push(...b);
  });
  return result;
};
console.log(
  "concatMulti([1, 2], [3], [4], [5, 6]):",
  concatMulti([1, 2], [3], [4], [5, 6])
); // [1, 2, 3, 4, 5, 6]

const concatMulti2Recursive = (...a) => {
  if (a.length === 0) {
    return [];
  }
  const [first, ...tail] = a;
  return [...first, ...concatMulti2Recursive(...tail)];
};
console.log(
  "concatMulti2Recursive([1, 2], [3], [4], [5, 6])",
  concatMulti2Recursive([1, 2], [3], [4], [5, 6])
); // [1, 2, 3, 4, 5, 6]
