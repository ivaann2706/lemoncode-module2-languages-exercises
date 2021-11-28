// @ts-nocheck
console.log("*** Memoization ***");

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

const memoize = (f) => {
  let mem;
  return () => {
    if (!!mem) {
      return mem;
    } else {
      mem = f();
      return mem;
    }
  };
};

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415
