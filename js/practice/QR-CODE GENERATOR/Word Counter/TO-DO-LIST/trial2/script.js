// Get all required elements from the HTML document
const input = document.getElementById('input')
const button = document.getElementById('add')
const container = document.getElementById('container')

// Add an event listener to the button to add a task to the list
// A function to check and unckeck the tasks


// A function to run the whole thing
function run() {
    if (input.value === "") {
        alert("You have to enter text in the input")
    } else {
        // Create an item
        let item = document.createElement('div')
        item.className = 'item'

        // Create the marker
        let marker = document.createElement('div')
        marker.className = 'unmarked'
        // Create the task
        let task = document.createElement('p')
        task.className = 'task-unmarked'
        task.textContent = input.value
        input.value = ""
        // Create the delete button
        let remove = document.createElement('span')
        remove.className = 'delete'
        remove.textContent = '\u2717'

        // Add an event listener to the marker to check and uncheck the task
        marker.addEventListener('click', () => {
            if (marker.className !== 'marked') {
                marker.className = 'marked'
                marker.textContent = '\u2713'
                task.className = 'task-marked'
                item.style.backgroundColor = '#A3E4D7'
            } else {
                marker.className = 'unmarked'
                task.className = 'task-unmarked'
                marker.textContent = ""
                item.style.backgroundColor = ""
            }
        })
        
        // Add the task to the container
        item.appendChild(marker)
        item.appendChild(task)
        item.appendChild(remove)
        container.appendChild(item)
        
        // Add an event listener to the delete button
        remove.addEventListener('click', () => {
            container.removeChild(item)
        })

    }
}
// A function to handle a keypress
function handleKeyPress(event) {
    // Check if the key pressed is enter
    (event.keyCode === 13 || event.which === 13) ? run() : "";
}

button.addEventListener('click', run)
document.addEventListener('keypress', handleKeyPress)
