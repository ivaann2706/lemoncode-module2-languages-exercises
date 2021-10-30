var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function () {
      return this.surname;
    },
  },
};

console.log("*** This ***");
console.log(person.wife.getSurname()); // Jiménez
var surnameFunction = person.wife.getSurname;
// console.log(surnameFunction()); // error, undefined
console.log(surnameFunction.call(person)); // González
