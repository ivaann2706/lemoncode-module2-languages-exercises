function clone(source) {
  const result = {};
  for (const key in source) {
    result[key] = source[key];
  }
  return result;
}

function merge(source, target) {
  for (const key in source) {
    target[key] = source[key];
  }
  return target;
}

// extra
function clone2(source) {
  return { ...source };
}

function merge2(source, target) {
  return { ...target, ...source };
}
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log("*** Clone Merge ***");
console.log(a);
console.log(clone(a)); // {name: 'Maria', surname: 'Ibañez', country: 'SPA'}
console.log(a === clone(a)); // false
console.log(clone2(a)); // {name: 'Maria', surname: 'Ibañez', country: 'SPA'}
console.log(a === clone2(a)); // false
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log(merge2(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
