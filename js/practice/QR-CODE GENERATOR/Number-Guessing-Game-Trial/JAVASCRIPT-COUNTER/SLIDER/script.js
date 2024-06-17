const left = document.querySelector('.arrow-left')
const right = document.querySelector('.arrow-right')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.images')
const bottom = document.querySelector('.bottom')

let slideNumber = 1
const length = images.length

for (i = 0; i < length; i++) {
    const div = document.createElement('div')
    div.className = 'button'
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = 'white'

function reset() {
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent"
    });
}

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        reset()
        slider.style.transform = `translateX(-${i * 800}px)`
        slideNumber = i + 1
        button.style.backgroundColor = "white"
    })
});

function nextSlide() {
    slider.style.transform = `translateX(-${800 * slideNumber}px)`
    slideNumber ++
}

function prevSlide() {
    slider.style.transform = `translateX(-${800 * (slideNumber - 2)}px)`
    slideNumber --
}

function firstSlide() {
    slider.style.transform = `translateX(0px)`
    slideNumber = 1
}

function lastSlide() {
    slider.style.transform = `translateX(${(length - 1) * 800}px)`
    slideNumber = length
}

function changeColor() {
    reset()
    buttons[slideNumber - 1].style.backgroundColor = "white"
}

right.addEventListener('click', () => {
    (slideNumber < length) ? nextSlide() : firstSlide();
    changeColor()
})

left.addEventListener('click', () => {
    (slideNumber > 1) ? prevSlide() : lastSlide();
    changeColor()
})

