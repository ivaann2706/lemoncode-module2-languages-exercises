// @ts-nocheck
console.log("*** Deep Access ***");

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

const deepGet = (obj: Object, ...props: string[]) => {
  if (!props.length) {
    return obj;
  }

  const [first, ...rest] = props;

  if (!rest.length) {
    return obj[first];
  } else if (!!obj[first]) {
    return deepGet(obj[first], ...rest);
  } else {
    return undefined;
  }
};

console.log("--> deepGet");
console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {...}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}

const myObject = {};

const deepSet = (value, obj, ...props) => {
  if (props.length) {
    const [first, ...rest] = props;
    if (!rest.length) {
      obj[first] = value;
      return obj;
    } else if (!!obj[first]) {
      obj[first] = deepSet(value, obj[first], ...rest);
    } else {
      obj[first] = deepSet(value, {}, ...rest);
    }
  }
};

console.log("--> deepSet");
deepSet(1, myObject, "a", "b");
console.log(JSON.stringify(myObject)); // {a: { b: 1}}
deepSet(2, myObject, "a", "c");
console.log(JSON.stringify(myObject)); // {a: { b: 1, c: 2}}
deepSet(3, myObject, "a");
console.log(JSON.stringify(myObject)); // {a: 3}
deepSet(4, myObject);
console.log(JSON.stringify(myObject)); // Do nothing // {a: 3}
