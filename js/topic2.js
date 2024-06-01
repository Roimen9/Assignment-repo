// Arrays
// Arrays in JavaScript are used to store ordered collection of values.
// Arrays can contain values of different data types including objects and other arrays(Multi-dimensional arrays)

// 1. Creating and Assigning arrays
// const arr = [value1, value2, valueN]

// const emparr = []
const fruits = ["Melons", "Kiwi", "Grapes"]
const numbers = [1, 2, 3, 4, 5]
const mix = ["hello", 50, true, null]

// 2.Array Methods
// Push() and pop(): Add and remove elements from the end of an array
// shift() and unshift(): Add and remove elements from the beginning of an array
// Slice():Returns shallow copy of a portion of an array
// splice():  Changes the contents of an array byremoving or replacing existing elements and/or adding new elements
// concat(): Merges two or more arrays and returns a new array
// indexOf() and lastIndexOf(): Returns the indexof the first(or last) occurrence of a specified element in an array
// includes(): Determines whether an array includes a certain value
// reverse(): Reverses the order of elements in the array
// sort(): Sorts the array elements in place
// map(),filter and reduce(): High-order functions for transforming and maniulating arrays

// Push()
fruits.push("Tangerine") // Adds a new fruit at the end
console.log(fruits)

// Pop()
fruits.pop() // removes the element at the end
console.log(fruits)

// unshift()
fruits.unshift("Dates") // Adds a new element at the beginning of the array
console.log(fruits)

// shift()
fruits.shift() // removes an element at the beginning of the array
console.log(fruits)

let slicedArray = fruits.slice(1, 3)
console.log(slicedArray)

// splice()
fruits.splice(1, 1, "pineapple")
console.log(fruits)

// concat()
let newArray = ["Mango", "Lime"]
let combinedArray = []

// 3. Array Iteration
// forEach(): Executes a provided function once for each array element
// map(): Creates a new array with the results of calling a provided function on every element of the original array
// filter(): Creates a new array with all elements that pass the test implemented by the provided function
// reduce(): Applies

// forEach()
fruits.forEach(fruits => {
    console.log(fruit)
})

// map()
const doubleNumbers = numbers.map(num => num * 2)
console.log(doubleNumbers)

// filter()
const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)

// reduce()
const sum = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum)

// Objects
// Objects in JavaScript are unordered collection of key-value pairs
// They are used to store complex data structures and represent real-world entities

// 1. Object Literal
// const obj = {
//     key1: value1,
//     key2: value2,
//     ...,
//     keyN: valueN
// }

const person1 = {
    name: "Ryan",
    age: 18,
    greet: function() {
        console.log(`Hello, myname is ${this.name}`)
    }
}

// // 2. Accessing and Modifying Object Properties
// obj.key1 // Dot Notation
// obj["key2"] //Bracket Notation

// // Adding a new property
// obj.newKey = newValue

// // Removing a property
// delete obj.key2
console.log(person1.name)

person1.age = 50
console.log(person1)

// // 3. Object Methods
// const obj = {
//     method1: function() {
//         // Method body
//     },
//     method2() {
//         // Method body (shorthand syntax)
//     }
// }
person1.greet()

// 4.The 'this' keyword
// The 'this' keyword refers to thecurrent object context. Its value depends on how the function is called.