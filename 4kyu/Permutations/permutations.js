const permutations = (string) => {
  const list = string.split('')
  const result = []
  
  if (string.length < 2) return [string]
  
  list.forEach((char, index) => {
    const remChars = string.substring(0, index) + string.substring(index + 1, string.length)
    permutations(remChars).forEach(( permutation) => {
        result.push(char + permutation)
    })
  })
  
  return Array.from(new Set(result))
}
