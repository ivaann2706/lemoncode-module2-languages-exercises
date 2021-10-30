console.log("*** Slot Machine ***");

class SlothMachine {
  constructor() {
    this.coins = 0;
  }

  play = () => {
    this.coins++;
    const slots = [this.shufle(), this.shufle(), this.shufle()];
    const win = slots.every((slot) => slot);
    if (win) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  };

  shufle = () => !!Math.round(Math.random());
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
