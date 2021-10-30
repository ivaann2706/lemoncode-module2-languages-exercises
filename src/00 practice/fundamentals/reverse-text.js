function reverseText(text) {
  return text.split(" ").reverse().join(" ");
}

console.log("*** Reverse Text ***");
console.log(reverseText("three two one"));
