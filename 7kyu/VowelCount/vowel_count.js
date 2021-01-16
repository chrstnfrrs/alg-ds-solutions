const getCount = (string) => string.split('').reduce((accumulator, character) => ['a', 'e', 'i', 'o', 'u'].includes(character) ? accumulator += 1 : accumulator, 0)

console.log(getCount('Panda'))
console.log(getCount('Testing'))