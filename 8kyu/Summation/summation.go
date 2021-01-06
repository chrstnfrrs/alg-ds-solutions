package main

import (
	"fmt"
)

// Summation returns sum of all numbers less than the number used as input
func Summation(n int) int {
	result := 0
	for i := 1; i <= n; i++ {
		result += i
	}
	return result
}

func main() {
	fmt.Println(Summation(1))
	fmt.Println(Summation(8))
}
