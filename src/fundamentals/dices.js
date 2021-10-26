function createDices() {
  var dice1;
  var dice2;
  return {
    throw: function () {
      dice1 = Math.floor(Math.random() * 6) + 1;
      dice2 = Math.floor(Math.random() * 5) + 1;
    },
    reset: function () {
      dice1 = undefined;
      dice2 = undefined;
    },
    print: function () {
      if (dice1 === 6 && dice2 === 6) {
        console.log("Doble 6!!! Tienes premio!!");
      } else if (dice1 && dice2) {
        console.log(`${dice1} y ${dice2}, sigue intentando`);
      } else {
        console.log("Debes tirar primero!");
      }
    },
  };
}

console.log("*** Dices ***");
const myDices = createDices();

myDices.throw();
myDices.print();
myDices.throw();
myDices.print();

myDices.reset();
myDices.print(); // Debes tirar primero!
