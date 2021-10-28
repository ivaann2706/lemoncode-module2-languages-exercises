console.log("*** Reminder ***");

class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(function () {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }

  remindMe2(delay) {
    setTimeout(() => {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

const reminder = new Reminder("hello");
reminder.remindMe(5); // Your reminder after 5 seconds is: undefined
reminder.remindMe2(5); // Your reminder after 5 seconds is: hello

// The solution is to use ARROW FUNCTIONS.

// Arrow functions have a very important characteristic, and that is the reason for their existence:
// *** They keep "this" pointing to the context in which they were created ... ALWAYS ***
// That is, the "this" inside a lambda always refers to the context where the lambda was created. "this" is no longer the one that calls the lambda.
// In other words, lambdas do not have their own context because they always borrow it from the context where they were created.
