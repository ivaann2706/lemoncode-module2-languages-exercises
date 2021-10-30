function isPrime(value) {
  if (value === 0 || value === 1) return false;
  for (let i = 2; i < value; i++) {
    if (value % i === 0) return false;
  }
  return true;
}

function isPrime2(value) {
  if (value === 0 || value === 1) return false;
  const sqrt = Math.round(Math.sqrt(value));
  for (let i = 2; i <= sqrt; i++) {
    if (value % i === 0) return false;
  }
  return true;
}

function showPrimes(from, to) {
  for (let i = from; i <= to; i++) {
    // if (isPrime(i)) {
    if (isPrime2(i)) {
      console.log(i + " is PRIME!");
    } else {
      console.log(i + " is not a prime");
    }
  }
}

console.log("*** Primes ***");
showPrimes(1, 100);
