console.log("*** Morse ***");

const createMorseTransmitter = () => ({
  message: "",
  morseAlphabet: {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
  },
  write(isOn: boolean): void {
    console.log(Number(isOn));
  },
  timeOut(isOn: boolean, points: number): Promise<number> {
    this.write(isOn);
    return new Promise((resolve) => setTimeout(resolve, points * 1000));
  },
  endMessageCallback(text: string): void {
    this.message = text;
  },
  async transmitMessage(text: string): Promise<void> {
    console.log(`The word to transmit is ${text}`);
    const words = text.toLowerCase().split(" ");
    for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
      const word = words[wordIdx];
      for (let letterIdx = 0; letterIdx < word.length; letterIdx++) {
        const letter = word[letterIdx];

        const letterCodes = this.morseAlphabet[letter].split("");
        console.log(letter, letterCodes);
        for (let codeIdx = 0; codeIdx < letterCodes.length; codeIdx++) {
          const code = letterCodes[codeIdx];
          if (code === ".") {
            await this.timeOut(true, 1);
          } else if (code === "-") {
            await this.timeOut(true, 3);
          }
          if (codeIdx !== letterCodes.length - 1) {
            await this.timeOut(false, 1);
          }
        }
        if (letterIdx !== word.length - 1) {
          await this.timeOut(false, 3);
        }
      }
      if (wordIdx !== words.length - 1) {
        await this.timeOut(false, 7);
      } else {
        await this.timeOut(false, 1);
      }
    }
    if (!!this.message) console.log(this.message);
  },
});

const morseTransmitter = createMorseTransmitter();
morseTransmitter.endMessageCallback("The end");
morseTransmitter.transmitMessage("SOS");
