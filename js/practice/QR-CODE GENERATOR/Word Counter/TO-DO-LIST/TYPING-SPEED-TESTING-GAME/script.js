const paragraphs = [
    'The sun rose over the horizon, casting golden hues across the fields. Birds chirped merrily in the trees, welcoming the new day with their cheerful melodies. A gentle breeze rustled through the leaves, carrying with it the scent of freshly mown grass—a perfect morning for a leisurely walk in the countryside.',
    'In the distance, a farmer tended to his crops, carefully plucking weeds from the fertile soil. His dedication to the land was evident in every meticulous action. Nearby, a stream meandered through the meadow, its crystal-clear waters shimmering in the sunlight, fish darting playfully beneath the surface, oblivious to the world above.',
    "As I walked along the path, I spotted a cluster of wildflowers swaying gently in the breeze. Their vibrant colors painted a beautiful contrast against the green backdrop of the field. High above, a hawk soared gracefully in the sky, its keen eyes scanning the ground below for any sign of movement, nature's intricate balance on full display.",
    "Along the hedgerow, butterflies danced from flower to flower, their delicate wings fluttering in the air. Each seemed to carry a message of joy and renewal. Beneath a towering oak tree, I found a comfortable spot to rest and soak in the serenity of the surroundings, time seeming to stand still in this tranquil corner of the world.",
    "The distant call of a rooster echoed across the valley, signaling the start of another day's journey. Life in the countryside followed a rhythm as ancient as the hills themselves. Beyond the fields, a quaint village nestled at the foot of a hill, its cottages adorned with colorful gardens, smoke curling lazily from chimneys.",
    "In the orchard, apple trees laden with fruit swayed gently in the breeze, branches bowed under the weight of their juicy offerings, ripe for the picking. A herd of cows grazed peacefully in the pasture, contentedly chewing cud, their rhythmic munching adding a soothing soundtrack to the pastoral scene.",
    "As noon approached, the sun reached its zenith, casting dappled shadows beneath the canopy of the forest. Coolness lingered in the shade, inviting respite from the warmth. In a nearby field, a farmer guided his trusty horse as they plowed furrows into the earth, the horse's steady gait matching the deliberate pace of the farmer's movements.",
    "Overhead, a flock of geese flew in a perfect V formation, honking softly as they migrated southward, their journey a testament to the instinctual wisdom of the natural world. Near the riverbank, a family of deer emerged cautiously from the underbrush, ears twitching at every sound, moving gracefully, blending seamlessly into their woodland habitat.",
    "Along the roadside, a solitary fox darted across the path, russet fur blending with the earthy tones of the landscape, pausing briefly to sniff the air before disappearing into the forest. As evening approached, the sky transformed into a canvas of vibrant colors—hues of orange, pink, and purple painted across the heavens—a breathtaking farewell to the day.",
    "In the twilight, fireflies emerged from their daytime hiding spots, flickering like tiny stars in the gathering darkness, their gentle glow adding a magical touch to the night. Under the starlit sky, I walked back along the path, grateful for the day's simple pleasures, nature's beauty leaving an indelible mark on my heart."
]
const typingText = document.querySelector('.typing-text p')
const inputField = document.querySelector('.input-field')
const timerTag = document.querySelector('.time b')
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")
const mistakeTag = document.querySelector(".mistake span")
const button = document.querySelector('button')
// let words = ""


let timer,
maxTime = 60,
timeLeft = maxTime
let characterIndex = mistakes = isTyping = 0

function randomParagraph() {
    // Getting a random number that is always less than the paragraghs length
    let index = Math.floor(Math.random() * paragraphs.length)
    typingText.innerHTML = ""
    // Getting random items from the paragraphs array, splitting all of its characters and adding each character inside a span element and then adding the span inside the p tag
    // Get the number of words in the paragraph
    // words = paragraphs[index].split(/\s+/).filter(word => word !== " ").length
    paragraphs[index].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`
        typingText.innerHTML += spanTag 
    })
    typingText.querySelectorAll('span')[0].classList.add("active")
    // Focusing on the input field 
    document.addEventListener('keydown', () => inputField.focus())
    typingText.addEventListener('click', () => input.focus())
}
randomParagraph()

function initTyping() {
    const characters = typingText.querySelectorAll('span')
    // Splitting all values of the input
    let typedChar = inputField.value.split("")[characterIndex]
    if (characterIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true
        }
        // If the user hasn't entered any character or pressed backspace
        if (typedChar == null) {
            characterIndex-- // decrement characterIndex

            // Decrement mistakes only if the characterIndex span contains the incorrect class
            if (characters[characterIndex].classList.contains("incorrect")) {
                mistakes--
            }
            characters[characterIndex].classList.remove("correct", "incorrect")
        } else {
            if (characters[characterIndex].innerText === typedChar) {
                // If the user typed character and the one shown match then add the correct classname to the span tag of the character else increment the mistake counter and add the incorrect classname to the span tag of the character
                characters[characterIndex].classList.add('correct')
            } else {
                mistakes++
                characters[characterIndex].classList.add("incorrect")
            }
            // Increament the character index
            characterIndex ++
        }   
        characters.forEach(span => span.classList.remove("active"))
        characters[characterIndex].classList.add("active")
        
        let wpm = Math.round((((characterIndex - mistakes) / 5) / (maxTime - timeLeft)) * 60)
        // If wpm value is 0, empty or infinity then setting it's value to 0
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm
        wpmTag.innerText = wpm
        mistakeTag.textContent = mistakes
        cpmTag.innerText = characterIndex - mistakes
    } else {
        inputField.value = ""
        clearInterval(timer)
        alert("Time is up!!!")
    }
}

function initTimer() {
    // If timeleft is greater than 0 then decreent the timeleft else clear the timer
    if (timeLeft > 0){
        timeLeft--
        timerTag.textContent = timeLeft
    } else {
        clearInterval(timer)
    }
}

function resetGame() {
    // Call the loadParagraph function and reset each variable and element to its default
    randomParagraph()
    inputField.value = ""
    clearInterval(timer)
    timeLeft = maxTime
    characterIndex = mistakes = isTyping = 0
    timerTag.innerText = timeLeft
    mistakeTag.textContent = mistakes
    wpmTag.innerText = 0
    cpmTag.innerText = 0
}

inputField.addEventListener('input', initTyping)
button.addEventListener('click', resetGame)