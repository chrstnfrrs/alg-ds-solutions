const moveZerosA = (arr) => [
  ...arr.filter((item) => item !== 0),
  ...arr.filter((item) => item === 0),
];
const moveZerosB = (arr) =>
  arr.filter((item) => item !== 0).concat(arr.filter((item) => item === 0));
