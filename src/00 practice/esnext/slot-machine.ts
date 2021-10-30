console.log("*** Slot Machine ***");

class SlothMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }

  play = (): void => {
    this.coins++;
    const slots: boolean[] = [this.shufle(), this.shufle(), this.shufle()];
    const win: boolean = slots.every((slot) => slot);
    if (win) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  };

  shufle = (): boolean => Boolean(Math.round(Math.random()));
}

const machine1: SlothMachine = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
