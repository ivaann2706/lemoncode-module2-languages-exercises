function biggestWord(phrase: string): string {
  const words = phrase.split(" ");
  let biggest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > biggest.length) {
      biggest = words[i];
    }
  }

  return biggest;
}

// Ejemplo
console.log("*** Biggest word ***");
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"
