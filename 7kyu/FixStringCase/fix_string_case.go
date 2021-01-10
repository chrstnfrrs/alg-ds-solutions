package main

import (
	"fmt"
	"strings"
)

// fixStringCase returns a string with the same case. The case with the large number is adopted by the whole string. Defaults to lowercase.
func fixStringCase(str string) string {
	uppercaseCount := 0
	lowercaseCount := 0

	for _, s := range str {
		if string(s) == strings.ToUpper(string(s)) {
			uppercaseCount++
		} else if strings.ToLower(string(s)) == string(s) {
			lowercaseCount++
		}
	}

	if uppercaseCount > lowercaseCount {
		return strings.ToUpper(str)
	}

	return strings.ToLower(str)
}

func main() {
	fmt.Println(fixStringCase("coDe"))
	fmt.Println(fixStringCase("CODe"))
	fmt.Println(fixStringCase("COde"))
}
