// Get all the elements from the HTML document
const textArea = document.getElementById('textarea')
const words = document.getElementById('words')
const characters = document.getElementById('characters')
const clearBtn = document.getElementById('clear')

// Add an event listener to the text area
textArea.addEventListener('input', () => {
    // Get the text in the text area and remove all white spaces and then get the length and display it as the number of characters
    let text = textArea.value
    let cleaned = text.replace(/\s/g, '')
    characters.textContent = cleaned.length

    // Get the text in the text area seperate the elements after every whitespace then remove any empty string.Get the length of that array and display it as the number of words
    let splitted = text.split(/\s+/)
    let filtered = splitted.filter(word => word !== " ")
    words.textContent = filtered.length

    // Call the storeData function
    storeData()
})

// Create functions to store the data in the word counter and display the same data even if the browser is refreshed 
function storeData() {
    localStorage.setItem("text", textArea.value)
    localStorage.setItem("words", words.textContent)
    localStorage.setItem("characters", characters.textContent)
}
 
function showData() {
    textArea.value = localStorage.getItem("text")
    words.textContent = localStorage.getItem("words")
    characters.textContent = localStorage.getItem("characters")
}
// Call the showData function
showData()

// Add an event listener to the clear button to clear all the text from the text area
clearBtn.addEventListener('click', () => {
    textArea.value = ""
    words.textContent = textArea.value.length
    characters.textContent = textArea.value.length
    storeData()
    showData()
})