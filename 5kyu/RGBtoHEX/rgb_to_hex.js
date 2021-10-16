const decimalToHex = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

const toHex = (decimal) => {
  let firstChar = Math.floor(decimal / 16);
  let secondChar = decimal % 16;

  if (firstChar >= 16) {
    firstChar = 15;
    secondChar = 15;
  } else if (firstChar < 0) {
    firstChar = 0;
    secondChar = 0;
  }

  return `${decimalToHex[firstChar]}${decimalToHex[secondChar]}`;
};

const rgb = (r, g, b) => `${toHex(r)}${toHex(g)}${toHex(b)}`;

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0, 0, 0));
console.log(rgb(148, 0, 211));
