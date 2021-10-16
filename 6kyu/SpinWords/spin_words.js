const spinWords = (sentence) =>
  sentence
    .split(" ")
    .map((word) => {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");

// "Hey wollef sroirraw"
console.log(spinWords("Hey fellow warriors"));
// "This is a test"
console.log(spinWords("This is a test"));
// "This is rehtona test"
console.log(spinWords("This is another test"));
