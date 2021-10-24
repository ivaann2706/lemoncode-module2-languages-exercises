import { values } from "./values.js";

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const sumReducer = (acc, cur) => acc + cur;

function average(values) {
  const sum = values.reduce(sumReducer, 0);
  return sum / values.length;
}

function numberToString(num) {
  let calificationString;

  if (num == 10) {
    calificationString = "Matrícula de Honor";
  } else if (num >= 9) {
    calificationString = "Sobresaliente";
  } else if (num >= 7) {
    calificationString = "Notable";
  } else if (num >= 6) {
    calificationString = "Bien";
  } else if (num >= 5) {
    calificationString = "Insuficiente";
  } else {
    calificationString = "Muy deficiente";
  }

  return calificationString;
}

function printAverage(classResults) {
  const valuesList = values(classResults);
  const avg = average(valuesList);
  return numberToString(avg);
}

console.log("*** Califications ***");
console.log(printAverage(eso2o));
