console.log("*** Curry Setter ***");

interface User {
  name: string;
  surname: string;
  age: number;
}

const set = (user: User, prop: string, value: string | number) => {
  const newUser = { ...user };
  if (Object.prototype.hasOwnProperty.call(newUser, prop)) {
    newUser[prop] = value;
  } else {
    console.log(`Property ${prop} does not exist`);
  }
  return newUser;
};

const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set(julia, "age", 25);

console.log("julia: ", julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log('set(julia, "age", 25): ', updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log("julia === updatedJulia: ", julia === updatedJulia); // false
console.log('set(julia, "country", "Spain")');
set(julia, "country", "Spain");

const setCurried = (prop: string) => (user: User, value: string | number) => {
  const newUser = { ...user };
  if (Object.prototype.hasOwnProperty.call(newUser, prop)) {
    newUser[prop] = value;
  } else {
    console.log(`Property ${prop} does not exist`);
  }
  return newUser;
};

const setName = setCurried("name");
const setSurname = setCurried("surname");
const setAge = setCurried("age");

console.log("--> setCurried");
console.log("julia: ", julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log('setName(julia, "Ana"): ', setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log('setSurname(julia, "González": ', setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log("setAge(julia, 25: ", setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
