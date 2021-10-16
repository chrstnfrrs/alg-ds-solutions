const solution = (input, markers) => {
  const lines = input.split("\n");

  const result = lines
    .map((line) => {
      const unmarkedLine = markers.reduce((acc, marker) => {
        return line.indexOf(marker) === -1
          ? acc
          : line.substring(0, line.indexOf(marker));
      }, line);

      return unmarkedLine.trim();
    })
    .join("\n");

  return result;
};
