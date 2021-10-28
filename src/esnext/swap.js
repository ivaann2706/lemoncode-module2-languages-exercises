console.log("*** Swap ***");

let a = "A";
let b = "B";

[b, a] = [a, b];

console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");
