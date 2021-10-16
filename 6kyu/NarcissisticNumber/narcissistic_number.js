const narcissistic = (number) =>
  number ===
  String(number)
    .split("")
    .reduce(
      (accumulator, index) => (accumulator += index ** String(number).length),
      0
    );

console.log(narcissistic(153));
console.log(narcissistic(1652));
