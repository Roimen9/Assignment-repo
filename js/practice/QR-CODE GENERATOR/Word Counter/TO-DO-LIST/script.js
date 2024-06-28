const input = document.getElementById('input')
const button = document.getElementById('add')
const container = document.getElementById('container')

// A function to add a task
function addTask() {
    }

// Add an event listener to the button
button.addEventListener('click', () => {
   if  (input.value === "" ) {
     alert("You have to enter text in the input")
    } else {
        // Create the item container
        let item = document.createElement('div')
        item.className = 'item'
        // Create the marker
        let marker = document.createElement('div')
        marker.className = 'unmarked'
        // Add an event listener to the marker
        marker.addEventListener('click', () => {
            if (marker.className === 'unmarked') {
                marker.className = 'marked'
                marker.textContent = '\u2713'
                task.className = 'task-marked'
            } else {
                marker.className = 'unmarked'
                marker.textContent = ""
                task.className = 'task-unmarked'
            }
        }) 
        // Create the task
        let task = document.createElement('p')
        task.className = 'task-unmarked'
        task.textContent = input.value
        input.value = ""

        // Create the delete button
        let remove = document.createElement('span')
        remove.className = 'delete'
        remove.textContent = '\u2717'

        // Add an event listener to the delete button
        remove.addEventListener('click', () => {
            container.removeChild(item)
        })
        // Add them to the container
        item.appendChild(marker)
        item.appendChild(task)
        item.appendChild(remove)
        container.appendChild(item)

    //     storeData()
        
    //     // Functions to store and retreive the data
    // function storeData() {
    //     localStorage.setItem('item', item)
    //     localStorage.setItem('marker', marker)
    //     localStorage.setItem('marker-class', marker.className)
    //     localStorage.setItem('task',task)
    //     localStorage.setItem('task-content', task.textContent)
    //     localStorage.setItem('task-class', task.className)
    //     localStorage.setItem('delete', remove)
    // }

    // function showData() {
    //     item = localStorage.getItem('item')
    //     marker = localStorage.getItem('marker')
    //     marker.className = localStorage.getItem('marker-class')
    //     task = localStorage.getItem('task')
    //     task.textContent = localStorage.getItem('task-content')
    //     task.className = localStorage.getItem('task-class')
    //     remove = localStorage.getItem('delete')
        
    //     item.appendChild(marker)
    //     item.appendChild(task)
    //     item.appendChild(remove)
    //     container.appendChild(item)  
    // }
    // showData()
    }
})

