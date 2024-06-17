// QR Code API -> goqr.me
// Insert link here

// Get our elements from the HTML Document
const imgBox = document.getElementById('imgBox')
const qrImage = document.getElementById('qrImage')
const qrText = document.getElementById('qrText')
const button = document.getElementsByClassName('button')
const p = document.getElementById('change')


p.addEventListener('click', () => {
    p.textContent = "Ryan"
    p.style.backgroundColor = "red"
    p.classList.add('new')
    
})

// Create a function
function generateQR() {
    if (qrText.value.length > 0) {
    // insert the link in the quotes
    qrImage.src = "" + qrText.value;
     
    // Add the QR-Code generated
    imgBox.classList.add('show-img')
    } else {
        qrText.classList.add('error')
        setTimeout(() => {
            qrText.classList.remove('error')
        },1000)
    }
}

// Add an event listener to the button so that it runs the generate function when it is clicked
button.addEventListener('click', generateQR)
