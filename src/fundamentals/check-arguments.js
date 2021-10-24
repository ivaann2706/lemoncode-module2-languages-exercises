function checkArguments(input) {
  return input === undefined || input === null ? "unknown" : input;
}

function checkArgumentsWithNullish(input) {
  return input ?? "unknown";
}

console.log("*** Check Arguments***");
console.log(checkArguments("test"));
console.log(checkArguments(null));
console.log(checkArguments(undefined));
console.log(checkArgumentsWithNullish("test"));
console.log(checkArgumentsWithNullish(null));
console.log(checkArgumentsWithNullish(undefined));
