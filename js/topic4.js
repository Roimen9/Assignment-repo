// Topic 4: Content and CSS with JavaScript

// 4.1 Manipulating Text Content
// You can access and modify the text content of an element using the textContent and innerText properties
// -> textContent - Represents the textcontent of the node and its descendants. It returns a string with all the text combined
// -> innerText - Similar to textContent, but it takes into account CSS stylesheets and may render the text differently

// Select an element by its id from the DOM
const element = document.getElementById('myElement')

// Getting the Text content of the element
element.textContent
element.innerHTML

// Setting the text content
element.textContent = 'New Text Content'

// 4.2 Manipulating HTML Content
// The innerHTML property allows you to access and modify the HTML content of an element, including any child element it may have

element.innerHTML = '<p>This is a new paragragh.</p>'

// 4.3 Working with CSS files
// JavaScript provides several ways to interact with and manipulate the CSS of an element

// 1. Inline Styles with the 'style' property
element.style.property = value
// This method allows you to set individual CSS properties dirctly on the element's style object

// 2. Accessing and Modifying CSS Properties
const elementStyle = window.getComputedStyle(element)

const color = elementStyle.getPropertyValue('color')

element.style.setProperty('color', 'red')

// You can use the getComputedStyle to retreive the computed style for an element and then  modify specific properties using the style. setProperty method

// 3. Working with Computed Styles
const fontSize = elementStyle.fontSize

// The getComputeStyle method returns a live CSSStyleDeclaration object representing the computed styles forthe element, taking in to account all active stylesheets and inline styles

// 4.4  Classes and 'classList'
// The classList property provides a convenient way to manipulate an element's class list, allowing you to add, remove or toggle CSS classes

const element = document.getElementById('myElement')

// Adding a class
element.classList.add('newClass')

// Removing a class
element.classList.remove('oldClass')

// Toggle a class
element.classList.toggle('active')

// Checking if an element hasa class
element.classList.contains('active')

// 4.5 Modifying attributes using JavaScript
// You can access and modify the attributes of an HTML file using the getAttribute and setAttribute methods
const element = getElementById('myElement')

// Getting an attribute value
const src = element.getAttribute('src')

// Setting an attribute value
element.setAttribute('src','new-image.jpg')

// Additionally, you can directlyaccess and modify certain attributes as properties of the element object such as id, className, href and others
element.id = 'newId'
element.class = 'newClass'

// 4.6 Event-Driven Content Updates
// JavaScipt allows you to update the content of an element based on user interactions or other events.THisis commonly done by attaching event handlers to elements and modifying theircoontent or styles within the event handler functions

const button = document.getElementById('myElement')
const content = document.getElementById('myContent')

button.addEventListener('click', () => {
    content.textContent = 'New Content Added'
    content.style.color = 'red'
})

// In this example, when the button is clicked, the text content and color of the #myContent element are updateddynamically using JavaScipt

// Event-driven content updates are fundamental to creating interactive and responsive user interfaces in web applicatons

// Tomorrow Topic 5 - Creating and Removing Elements
