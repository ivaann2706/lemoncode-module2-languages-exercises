// @ts-nocheck
console.log("*** Flatten Array ***");

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const flattenArray = (array) => {
  if (!Array.isArray(array)) {
    return [array];
  }

  if (array.length === 0) {
    return [];
  }

  const [first, ...rest] = array;

  return [...flattenArray(first), ...flattenArray(rest)];
};

console.log(flattenArray([1])); // [1]
console.log(flattenArray([[[1]]])); // [1]
console.log(flattenArray([1, [[[2, [3, 4, [5, 6, [7, 8, [9]]]]]]], 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(flattenArray(sample)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
