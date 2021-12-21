---
title: Go Note
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

[Go std](https://pkg.go.dev/std)
## Instalation on wsl

```bash
wget https://golang.org/dl/go1.17.2.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.17.2.linux-amd64.tar.gz
echo 'export PATH=$PATH:/usr/local/go/bin' >> $HOME/.profile // According to your terminal: $HOME/.zshrc or $HOME/.hasrc

source $HOME/.profile
go version
```

## Vs Code Installation

## Hello World
fmt is a package from standard library Go to print from standard output
```go
package main

import "fmt"

func main() {
	fmt.Println("Hello World")
}
```

## Data types
* byte (uint8)
* int[8,16,32,64]
* uint[8,16,32,64]
* float[32,64]
* complex[64,128]
* string "Hola Mundo"
* bool
* rune 'H' 'o' 'l' 'a'
⚠ Notes: runes are an alias from int32 and it use to write special characters like  \n


## show data in terminal
fmt.Printf("Hello, %s  today is %d / %s / %d", name, 2, "november", 2021)
* %v = default value (int, string, struct, etc)
* %t = true or false
* %d = integrer in base 10
* %b = integrer in base 2 (binary)
* %f = float with decimals
* %s = string

## Declaration Types
To create a var you must put a name, a type and a value. There is three methods

```go
var name string 		// Simple declaration
var b = "b es un string"	// Data type inference
c := "c es de tipo string"	// Declaration + asignation

const one, two uint8 = 1, 2	// Constant
```
⚠ Notes: You can only do arithmetic operations between equal data types

## Custom data type 

```go
type islasCanarias [8]string
```

## for loop

```go
// traditional for
for i:= 0; i < 5; i++ {
  fmt.Println("Contador : ", i)
}

// while loop
var i int
for i < 5 {
  fmt.Println("Contador :", i)
  i++
}
```

## If-else
```go
if dia == "sabado" || day == "domingo" {
	dormir()
} else if day == "lunes" {
	quejarse()
	trabajar()
} else {
	trabajar()
}
```
## Switch

```go
switch dia {
  case "sabado":
    dormir()
  case "domingo:
    dormir()
  default:
    trabajar()
}
```

## For-range
```go
for i, v := range []int{4,8,15,16,23,42} {
  fmt.Printf("Indice: %d Valor: %d\n", i, v)
}
```

## Iotas
creates a sequence of integers without having to specify all the values

```go
const (
  Lunes = iota + 1  	// Lunes = 1
  Martes		// Martes = 2
  Miercoles		// Miercoles= 3
  Jueves		// Jueves = 4
  Viernes		// Viernes = 5
)

const (

 _ = 1 << (iota * 10) // binary shift
 KB // 1024
 MB // 1048576
 GB // 1073741824
```



## Binary flags
```go
const (
	No    Alergeno = 0
	Huevo Alergeno = 1 << iota
	Lactosa
	Nueces
	Gluten
	Marisco
	Soja
)

func esAlergico(alergias, alergenos Alergeno) bool {
	return alergias&alergenos != No
}

alergias := Huevo | Gluten | Soja
alergenosProducto := Lactosa | Soja | Marisco

if esAlergico(alergias, alergenosProducto) {
	fmt.Println("No te lo comas que te mueres")
} else {
	fmt.Println("Puedes comer tranquilo")
}

```

## Scope

Functions and variables are private at package level if start with lower case and public if start with upper case

```go
package variables
// global variables (package)
var miVariable string
// global variable (export)
var MiVariable string

// public method
func MuestraVariables() {
  var b = "b is local"
  println(b)
}

// private method
func aux() {
  a := "a is a string"
  return a
}

```
## Array and slices
Arrays in go are static length and slice has variable length
```go
  //arrays
  isles := [...]string{"Tenerife","EL Hierro","La Palma"} //with [...] go calculate the length
  //slice
  isles := []string{"Tenerife","EL Hierro","La Palma"}
  isles.append("Fuerteventura")
```
you can reserve memory for a slice using make()
```go
  isles := make( []string, 8)
  isles[0] = "Fuerteventura"
```
## Maps
Diccionary key, value
Is important use the make() function to avoid nil map
```go
  consola := make(map[string]string)
  consolas["Nintendo"] = "Switch"
```
To check a map 

```go
delete(consolas, "Nintendo")
if value, ok := consolas["Nintendo"]; ok != false {
  fmt.Println(value)
}
```

## Go Modules
To start a module use this command on your root project directory
```zsh
go mod init nameOfYourRepo
```
Add dependences
all downloaded modules are in $GOPATH/pkg/mod
```zsh
go get -u url
```

## Packages
Is a subdirectory on your project

## Function receivers
Only the data type declared in the receiver can call the function

```go
type islasCanarias [8]string
func (islas IslasCanarias) print() {

}
```

## Struct
Variable that contains diferent variables

```go
type Island struct {
  name string
  population uint
  capitalina bool
}

var tenerife Island
```
## Composition

```go
type Point struct {X, Y float64}
type ColoredPoint struct {
Point Point
Color color.RGBA
}

punto := ColoredPoint{
  Point: Point{X:15, Y:51.5},
  Color: color.RGBA{255,255,255,0}
}
```
