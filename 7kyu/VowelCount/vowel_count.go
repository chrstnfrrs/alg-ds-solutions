package main

import (
	"fmt"
	"strings"
)

// GetCount returns the number of vowels in the strings
func GetCount(str string) int {
	count := 0
	vowels := []string{"a", "e", "i", "o", "u"}

	for _, vowel := range vowels {
		count += strings.Count(str, vowel)
	}

	return count
}

func main() {
	fmt.Println(GetCount("Panda"))
	fmt.Println(GetCount("Testing"))
}
