console.log("*** Fibonacci ***");
console.log("Option 1");
const fib = (n) => {
  if (n < 0) return "Invalid input. The number must be positive";
  if (n === 0) return 0;

  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[result.length - 1];
};

console.log("0 -> ", fib(0));
console.log("1 -> ", fib(1));
console.log("2 -> ", fib(2));
console.log("3 -> ", fib(3));
console.log("4 -> ", fib(4));
console.log("5 -> ", fib(5));
console.log("6 -> ", fib(6));
console.log("7 -> ", fib(7));
console.log("8 -> ", fib(8));

console.log("Option 2");
const fib2 = (n) => {
  if (n < 0) return "Invalid input. The number must be positive";
  if (n <= 1) return n;

  let previous = 0;
  let current = 1;
  for (let i = 1; i < n; i++) {
    [current, previous] = [current + previous, current];
  }

  return current;
};

console.log("0 -> ", fib2(0));
console.log("1 -> ", fib2(1));
console.log("2 -> ", fib2(2));
console.log("3 -> ", fib2(3));
console.log("4 -> ", fib2(4));
console.log("5 -> ", fib2(5));
console.log("6 -> ", fib2(6));
console.log("7 -> ", fib2(7));
console.log("8 -> ", fib2(8));
