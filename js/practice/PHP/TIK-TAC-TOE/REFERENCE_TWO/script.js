// Selecting all required elements
const selectBox = document.querySelector('.select-box'),
selectXBtn = selectBox.querySelector('.playerX'),
selectOBtn = selectBox.querySelector('.playerO'),
playBoard = document.querySelector('.play-board'),
allBox = document.querySelectorAll('section span'),
players = document.querySelector('.players');


// Once the window is loaded
window.onload = () => {
    // Add an onclick attribute in all available section spans
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }

    selectXBtn.onclick = () => {
    // Hide the select box when the playerX button is clicked
    selectBox.classList.add('hide')

    // Show the playboard section when the playerX button is clicked
    playBoard.classList.add('show')
    }

    selectOBtn.onclick = () => {
        // Hide the select box when the playerO button is clicked
        selectBox.classList.add('hide')

        // Show the playboard section when the playerO button is clicked
        playBoard.classList.add('show')

        // Adding three class names in the player element
        players.setAttribute('class', 'players active player')
    }
}

// Class name of fontawesome cross icon
let playerXIcon = 'faas fa-times';

// Class name of fontawesome circle icon
let playerOIcon = 'faas fa-times';

// user click function
function clickedBox(element) {
    console.log(element)
    if (players.classList.contains('player')) {
        // Adding the circle icon tag inside the clicked element
        element.innerHTMl = `<i class="${playerOIcon}"></i>`;
        players.classList.add('active');
    } else {
        // Adding the cross icon tag inside the clicked element
        element.innerHTMl = `<i class="${playerXIcon}"></i>`;
        players.classList.add('active');
    }
    // Once the user selects a box, then that box can't be selected again
    element.style.pointerEvents = 'none';
    bot();
}

// bot click function
function bot () {
    // Creating an empty array.We'll store unselected box indexes in this array
    let array = [];
    for (let i = 0; i < allBox.length; i++) {
        // if span does not have any child element
        if (allBox[i].childElementCount == 0) {
            // Inserting unclicked or unselected boxes inside the array means that the span has no children 
            array.push(i)
            console.log(i + " has no children")
        }
    }
    console.log(array)
}