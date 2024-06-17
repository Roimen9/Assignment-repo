const variable = document.querySelector('.variable');
const buttons = document.querySelectorAll('button') 

function  decision() {
    let randomNumber = Math.ceil(Math.random() * 100);
    if ((randomNumber % 2) === 0) {
        variable.textContent = "X's Turn"
    } else {
        variable.textContent = "O's Turn"
    }
}
decision();

function play() {
buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        let index = buttons.item(button)
        if (variable.textContent === "X's Turn"){
            buttons[index].textContent = "X";
            variable.textContent = "O's Turn"
        } else {    
            buttons[index].textContent = "O";
            variable.textContent = "X's Turn"
        }
    })
})
}

play()
    
