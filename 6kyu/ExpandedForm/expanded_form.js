const getString = (number, value, index) =>
  value.padEnd(String(number).length - index, "0");

const expandedForm = (number) =>
  String(number)
    .split("")
    .reduce((accumulator, value, index) => {
      if (value !== "0") {
        if (index !== 0) {
          accumulator += " + ";
        }
        accumulator += getString(number, value, index);
      }

      return accumulator;
    }, "");

console.log(expandedForm(12)); // Should return '10 + 2')
console.log(expandedForm(42)); // Should return '40 + 2')
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4')
