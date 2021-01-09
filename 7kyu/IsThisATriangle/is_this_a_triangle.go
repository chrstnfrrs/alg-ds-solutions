package main

import (
	"fmt"
)

// IsTriangle return whether or not the three integers can be used to make a triangle
func IsTriangle(a, b, c int) bool {
	return (a+b) > c && (b+c) > a && (a+c) > b
}

func main() {
	fmt.Println(IsTriangle(1, 2, 2))
	fmt.Println(IsTriangle(7, 2, 2))
}
