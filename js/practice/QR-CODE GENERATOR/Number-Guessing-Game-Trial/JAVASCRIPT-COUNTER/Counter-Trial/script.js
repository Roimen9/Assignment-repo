const display = document.getElementById ('number')
const lower = document.getElementById('lower')
const add = document.getElementById('add')

let counter = 0

lower.addEventListener('click', () => {
    counter --
    if (counter < 0) {
        display.style.color = "red"
        display.textContent = counter
    } else if (counter > 0) {
        display.style.color = "green"
        display.textContent = counter
    } else {
        display.style.color = "black"
        display.textContent = counter
    }
})

add.addEventListener('click', () => {
    counter ++
    if (counter < 0) {
        display.style.color = "red"
        display.textContent = counter
    } else if (counter > 0) {
        display.style.color = "green"
        display.textContent = counter
    } else {
        display.style.color = "black"
        display.textContent = counter
    }
})