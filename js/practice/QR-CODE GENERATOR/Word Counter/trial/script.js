// Get everything from our HTML document and store them in variables
const textArea = document.getElementById('text-area')
const words = document.getElementById('word-number')
const characters = document.getElementById('character-number')

// Add an event listener to thetext area to detect every input
textArea.addEventListener('input', () => {
    // Get the text in the text area
    let text = textArea.value
    // Clean the text by removing the whitespaces 
    cleaned = text.replace(/\s/g, '')
    // Display the number of characters without the whitespaces
    characterLength = cleaned.length
    characters.textContent = characterLength

    // Words
    // Get the text in the text area and split it after every space
    let splitted = text.split(/\s+/)
    // Filter to remove any empty values
    let filtered = splitted.filter(word => word !== " ")
    // Get the length of the new array and display it as the number of words
    wordLength = filtered.length
    words.textContent = wordLength
    saveData()
})

function saveData() {
    localStorage.setItem("data", textArea.value);
    localStorage.setItem("words", wordLength)
    localStorage.setItem("characters", characterLength)
}

function showData() {
    textArea.value = localStorage.getItem("data");
    words.textContent = localStorage.getItem("words")
    characters.textContent = localStorage.getItem("characters")
}
showData()


