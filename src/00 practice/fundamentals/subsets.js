function subsets(word) {
  const arr = [];
  while (word.length > 1) {
    word = word.slice(1);
    arr.push(word);
  }
  return arr;
}

function subsetsRecursive(word) {
  if (word.length === 1) {
    return "";
  }
  const [, ...tail] = word;
  return [tail, ...subsetsRecursive(tail)];
}

// Ejemplo
console.log("*** Subsets ***");
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
console.log(subsetsRecursive("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
