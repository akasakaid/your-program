package main

import "fmt"

func main() {
	//	program to check if a number is even or odd
	var num int
	println("Enter a number: ")
	fmt.Scan(&num)
	if num%2 == 0 {
		println("Number is even")
	} else {
		println("Number is odd")
	}
}
