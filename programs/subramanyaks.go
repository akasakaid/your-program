package main

import "fmt"

func factorial(n int) int {

	if n == 0 || n == 1 {
		return n
	}
	return n * factorial(n-1)
}

func main() {
	var i int
	fmt.Print("Type a number: ")
	fmt.Scan(&i)
	fmt.Println(factorial(i))
}