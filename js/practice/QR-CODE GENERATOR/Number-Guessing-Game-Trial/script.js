// Get all the elements we need from the HTML document
const input = document.getElementById('input')
const button = document.getElementById('button')
const restart = document.getElementById('restart')
const box = document.getElementById('box')
const previousGuesses = document.getElementById('box1')
const hint = document.getElementById('hint')

// Variables
guessCounter = 0
let guesses = 5
let firstNumber = 1
let lastNumber = 30
let listofNumbers = []

// Make the paragraph dynamic
paragraph.textContent = `We've randomly picked a number between ${firstNumber} and ${lastNumber}.Try and see if you can guess the number correctly.You have only ${guesses} guesses.`


// A method to generate a random number
let randomNumber = Math.floor(Math.random() * lastNumber) + 1;

// A function to reset the game once the user wins or uses up their guesses
function reset() {
    button.className = "show"
    restart.className = "restartBtn"
    box.className = ""

}

// A function to get the guessed number
function getNumber() {
    if (input.value != "") {
        if (guessCounter !== guesses) {
            let guess = Number(input.value)
            console.log(guess)
            guessCounter ++
            console.log(guessCounter)

            // Display the boxes once the first guess is entered
            if (guessCounter === 1) {
                box.className = "new"
                change = box.className
                console.log(change)
                listofNumbers.push(guess)
                previousGuesses.textContent = listofNumbers
                input.value = ""

                // Check how close the guess is
                if (guess < randomNumber) {
                    hint.textContent = "Your guess is slightly lower than the number.Try again!"
                    hint.style.backgroundColor = "red" 
                    hint.style.fontSize = "11.5px"
                } else if (guess > randomNumber) {
                    hint.innerHTML = "Your guess is slightly higher than the number.Try again"
                    hint.style.fontSize = "11.5px"
                    hint.style.backgroundColor = "red"
                } else {
                    hint.innerHTML = "Congradulations.You Won!!"
                    hint.style.fontSize = "11.5px"
                    hint.style.backgroundColor = "green"
                    setTimeout(() => {
                        button.className = "change"
                        restart.className = "restartBtn"
                        restart.addEventListener('click', () => {
                            box.className = "show"
                            button.className = "button"
                            restart.className = "none"
                            guessCounter = 0
                            listofNumbers = 0
                        })
                    }, 1000);
                }
            } else {
                listofNumbers.push(guess)
                previousGuesses.textContent = listofNumbers
                input.value = ""

                if (guess < randomNumber) {
                    hint.textContent = "Your guess is slightly lower than the number.Try again!"
                    hint.style.fontSize = "11.5px"
                    hint.style.backgroundColor = "red" 
                } else if (guess > randomNumber) {
                    hint.textContent = "Your guess is slightly higher than the number.Try again"
                    hint.style.fontSize = "11.5px"
                    hint.style.backgroundColor = "red"
                } else {
                    hint.textContent = "Congradulations.You Won!!"
                    hint.style.fontSize = "11.5px"
                    hint.style.backgroundColor = "green"
                    setTimeout(() => {
                        button.className = "change"
                        restart.className = "restartBtn"
                        restart.addEventListener('click', () => {
                            box.className = "show"
                            button.className = "button"
                            restart.className = "none"
                            guessCounter = 0
                            listofNumbers = ""
                            previousGuesses.textContent = ""
                            hint.textContent = ""
                        })
                    }, 1000);
                }

            }
        } else {
            hint.textContent = "You've used up all your guesses."
            hint.style.fontSize = "11.5px"
                    hint.style.backgroundColor = "red"
                    input.value = ""
                    setTimeout(() => {
                        button.className = "change"
                        restart.className = "restartBtn"
                        restart.addEventListener('click', () => {
                            box.className = "show"
                            button.className = "button"
                            restart.className = "none"
                            guessCounter = 0
                            listofNumbers = ""
                        })
                    }, 1000);
        }

    } else {
        alert('You have to enter a number in order to play the game')
    }   
}

// Add an event listener to the button to get the guessed number
button.addEventListener('click', getNumber)

