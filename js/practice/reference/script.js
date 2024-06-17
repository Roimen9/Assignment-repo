const display = document.querySelector('.result')
const history = document.querySelector('.history')
const butttons = document.querySelectorAll('.btn')

// Variables
let currentValue = ""
let previousValue = ""
let operator = ""
let result = ""

butttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent

        if (button.classList.contains('btn-number')) {
            handleNumber(value)
        } else if (button.classList.contains('btn-operator')) {
            handleOperator(value)
        } else if(button.classList.contains('btn-equals')) {
            calculate()
        } else if(button.classList.contains('btn-clear')) {
            clear()
        }
        updateDisplay()
    })
})

function handleNumber(value) {
    if (result !== "") {
        clear()
    }
    currentValue += value
}

function handleOperator(value) {
    if (operator !== "") {
        calculate()
    }
    operator = value
    previousValue = currentValue
    currentValue = ""
}

function calculate() {
    let computation

    const pre = parseFloat(previousValue)
    const current = parseFloat(currentValue)

    if(isNaN(pre) || isNaN(current)) {
        return
    }

    switch(operator) {
        case "+":
            computation = pre + currentValue
            break
        case "-":
            computation = pre - currentValue
            break
        case "×":
            computation = pre * current
            break
        case "÷":
            computation = pre / currentValue
            break
        case "%":
            computation = pre % currentValue
            break
        default:
            return
    }

    result = computation.toString()
    previousValue = ""
    currentValue = result
    operator = ""
}

function clear() {
    previousValue = ""
    currentValue = ""
    operator = ""
    result = ""
}

function updateDisplay() {
    display.textContent = currentValue || 0
    history.textContent = `${previousValue} ${operator}`

}