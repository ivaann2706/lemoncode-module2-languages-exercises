function zipObject(keys, values) {
  if (values.length > keys.length) {
    return "Values array cannot be greater than keys array";
  }
  const result = {};
  values.forEach((value, index) => {
    result[keys[index]] = value;
  });
  return result;
}

export { zipObject };

// Ejemplo
// console.log("*** zip ***");
// console.log(
//   zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
// ); // {spanish: "hola", english: "hi", french: "salut"}
// console.log(zipObject(["spanish", "english", "french"], ["hola", "hi"])); // {spanish: 'hola', english: 'hi'}
// console.log(zipObject(["spanish"], ["hola", "hi", "salut"])); // Values array cannot be greater than keys array
