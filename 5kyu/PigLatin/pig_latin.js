const pigIt = (str) => {
  const arrOfWords = str.split(" ");
  const firstLetters = [];
  const remainders = [];
  arrOfWords.forEach((word) => {
    firstLetters.push(word.substring(0, 1));
    remainders.push(word.substring(1));
  });

  const pigLatin = arrOfWords.map((_, i) => {
    return [".", "?", "!"].includes(firstLetters[i])
      ? `${remainders[i]}${firstLetters[i]}`
      : `${remainders[i]}${firstLetters[i]}ay`;
  });

  return `${pigLatin.join(" ")}`;
};
