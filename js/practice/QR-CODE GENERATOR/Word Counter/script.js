const textArea = document.getElementById('input-textarea')
const characterCount = document.getElementById('character-count')
const wordCount = document.getElementById('word-count')

textArea.addEventListener('input', () => {
    // Counts number of characters
    cleaned = textArea.value.replace(/\s/g, '')
    characterCount.textContent = cleaned.length

    // Removes white spaces from both the sides of the string
    let txt = textArea.value.trim()
    
    // Split text at spaces into array of substrings
    // Filter empty string
    // Count the length of the array
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length
})

let words = "Hello   world!  This is   a test."
let splitted = words.split(/\s+/)
let num = splitted.filter((word) => word !== "")
console.log(num.length)