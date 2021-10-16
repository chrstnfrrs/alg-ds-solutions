const sumStringsA = (a, b) => {
  const long =
    a.length > b.length ? a.split("").reverse() : b.split("").reverse();
  const short =
    a.length > b.length ? b.split("").reverse() : a.split("").reverse();
  let remainder = 0;

  const sum = long.reduce((acc, num, index) => {
    const cur =
      Number(num) +
      (short.length > index ? Number(short[index]) : 0) +
      remainder;
    const value = cur % 10;
    remainder = cur < 10 ? 0 : Math.floor(cur / 10);
    return `${acc}${value}`;
  }, "");

  const sumWithRemainder = remainder > 0 ? `${sum}${remainder}` : sum;
  const sumReversed = sumWithRemainder.split("").reverse().join("");
  const finalSum =
    sumReversed.charAt(0) == "0" ? sumReversed.substring(1) : sumReversed;

  return finalSum;
};

const sumStringsB = (a, b) => (BigInt(a) + BigInt(b)).toString();
