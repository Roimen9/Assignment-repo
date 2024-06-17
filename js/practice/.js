let myNumber = 10
let myFloat = 9
let bigInt = 8.7895656858527852175821521563215632156321563215215625
let round = bigInt.toFixed(5)
let newValue1 = "56531"
newValue = Number(newValue1)

newValue += 57

console.log(typeof(myNumber),
typeof(myFloat), typeof(bigInt), round, newValue)

function increment(num) {
    ++num
    return num
}
console.log(increment(5))

let number = 15
let x = 3
let product = number /= x
console.log(product)

console.log(5 !== 2 + 3)

console.log(5 != 5n)

let userName = "Ryan"
"Ryan"
console.log(userName == "Ryan")

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);


const person = {
    firstName : "Ryan",
    age : 18,
    gender : "male"
}

console.log(typeof(person))
person.age = 20
console.log(person.age)
console.log(person)

// 
