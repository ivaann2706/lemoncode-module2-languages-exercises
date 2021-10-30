const userA = { name: "María", age: 30 };
const clonedUserA = { name: "María", age: 30 };
const clonedUserA2 = { ...userA, country: "Spain" };

function isEqual(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (!Object.hasOwnProperty.call(b, key) || a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

console.log("*** Deep Equal ***");
console.log(userA === clonedUserA); // false
console.log(isEqual(userA, clonedUserA)); // true
console.log(isEqual(userA, clonedUserA2)); // false

const userB = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
const clonedUserB = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
const clonedUserB2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620, country: "Spain" },
  friends: ["Juan"],
};

function isDeepEqual(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (
      typeof a[key] === "object" &&
      Object.hasOwnProperty.call(b, key) &&
      typeof b[key] === "object"
    ) {
      const equal = isDeepEqual(a[key], b[key]);
      if (!equal) return false;
    } else if (!Object.hasOwnProperty.call(b, key) || a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
console.log(isDeepEqual(userB, clonedUserB)); // true
console.log(isDeepEqual(userB, clonedUserB2)); // false
