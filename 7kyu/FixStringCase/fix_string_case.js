const fixStringCase = (str) => {
  let upperCase = 0
  let lowerCase = 0
  str.split('').forEach(e => e.toUpperCase() === e ? upperCase ++ : lowerCase++)
  
  return upperCase > lowerCase ? str.toUpperCase() : str.toLowerCase()
}

console.log(fixStringCase('coDe'))
console.log(fixStringCase('CODe'))
console.log(fixStringCase('COde'))