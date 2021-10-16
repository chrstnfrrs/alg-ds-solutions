const growth = (startingPopulation, percentIncrease, annualChange) =>
  startingPopulation +
  startingPopulation * (percentIncrease / 100) +
  annualChange;

const nbYear = (
  startingPopulation,
  percentIncrease,
  annualChange,
  desiredOutcome
) => {
  let iterator = 0;
  let population = startingPopulation;
  while (population < desiredOutcome) {
    iterator++;
    population = growth(population, percentIncrease, annualChange);
  }
  return iterator;
};

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
