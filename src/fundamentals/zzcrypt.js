import { zipObject } from "./zip.js";

// Descifra el siguiente secreto:
const secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
const plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  const cipherArr = cipher.split("");
  const plainArr = plain.split("");

  const zip = zipObject(cipherArr, plainArr);
  zip[" "] = " ";
  let result = "";
  for (let index = 0; index < secret.length; index++) {
    result += zip[secret[index]];
  }
  return result;
}

console.log("*** Zzcript ***");
console.log(decrypt(secret)); // lo estas haciendo super bien, puedes vacilar en el canal de slack escribiendo 'turing fliparia conmigo' :)
