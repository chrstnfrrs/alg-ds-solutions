package main

import (
	"fmt"
)

// GrowthTrajectory calculates annual population change
func GrowthTrajectory(population float64, percent float64, annualChange float64) int {
	return int(population + (population*(percent/100) + annualChange))
}

// NbYear returns the number of years it takes for the starting population to surpass the desiredOutcome
func NbYear(startingPopulation int, percent float64, annualChange int, desiredOutcome int) int {
	iterator := 0
	population := startingPopulation
	for population < desiredOutcome {
		iterator++
		population = GrowthTrajectory(float64(population), percent, float64(annualChange))
	}
	return iterator
}

func main() {
	fmt.Println(NbYear(1500, 5, 100, 5000))
	fmt.Println(NbYear(1500000, 2.5, 10000, 2000000))
}
