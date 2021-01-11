package main

import "fmt"

// Multiple3And5 return the sum of integers less than the parameter that are multiples of 3 and 5
func Multiple3And5(number int) int {
	sum := 0
	for i := 1; i < number; i++ {
		if i%3 == 0 || i%5 == 0 {
			sum += i
		}
	}
	return sum
}

func main() {
	fmt.Println(Multiple3And5(10))
}
