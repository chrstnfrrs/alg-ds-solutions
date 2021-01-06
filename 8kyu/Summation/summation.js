const summation = (value) => new Array(value).fill(1).reduce((accumulator, value, index) => {
  return accumulator + (index + 1)
}, 0)

console.log(summation(1))
console.log(summation(8))