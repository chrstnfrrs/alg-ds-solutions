const solution = (number) =>
  number > 0
    ? new Array(number)
        .fill(1)
        .reduce(
          (accumulator, value, index) =>
            index % 3 === 0 || index % 5 === 0
              ? accumulator + index
              : accumulator,
          0
        )
    : 0;
