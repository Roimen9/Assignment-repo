// Topic 3: DOM(Document Object Model)

// 3.1 Introduction toDOM
// It is a programming interface for web documents
// It represents the structure of a web page as a tree-like hierachy of nodes, where each node represents an HTML alement, attribute, text noed or comment

// The DOM provides a way for JavaScript to interact with and manipulate the content structure, and style of a web page dynamically
// It allows developers to access and modify the document's elements,attributes and content through a structured and standardized API(Application Programming Interface)

// 3.2 Selecting and Manipulating Elements
// JavaScript providesseveral methods to select and manipulate elements in the DOM:
// i. getElementById(id): Selects an element by its unique id attribute
// ii. getElementByTagName(tagName): selects elements by their tag name e.g div, p, a.Returns an HTML collection
// iii. getElementByClass(className): Selecs an element by its class. Returns an HTMLcollection
// iv. querySelector(selector): Selects the firstelement that matches the specified css selector
// v. querySelectorAll(selector): Selects all elements that match the specified css selector
// Returns a NodeList

// Once you haveselected an element, you can manipulate its properties, styles and content using various methods and properties providedby the DOM API

// 3.3 Working with Events
// Event are actions or occurrences that happen in the browser such as user interactions (clicks, keyboard etc), network events or timer events
// JavaScriptallowsyou to respond to these events by ataching event handlers

// a. Event Types and Event Handlers
// -> User events - click, mousedown, mouseup, keydown, keyup, keypress
// -> Window events - load, resize, scroll, hashchange
// -> Form events - submit, change, input, invalid
// -> Media evens - play, pause, ended, seeked

// b. Adding and removing event listeners
// element.addEventListener(eventType, eventHandler)
// element.removeEventListener(eventType, eventHandler)

// 3.4 DOM Traversal
// The DOM provides methods for traversing and accessing different nodes in the document tree

// a. Parent, Child and Siblings node
// -> parentNode - The parent node of the current node
// -> childNodes - A colletion of child nodes of the current node
// -> firstChild and lastChild() - The first and last child nodes respectively
// -> nextSiblingand previouslySibling - The next and previous sibling nodes respectively

// b. Navigating and Accessing Node Relationships
// -> parentElement - The parent nodeof the current node
// -> children - A collection of child element nodes of the current node
// -> firstElementChild and lastElementChild - The first and lastchild element nodes, respectively
// -> nextElementSibling and previousElementSibling - The next and previous sibling element nodes respectively

// c. NodeList and HTML collections
// -> NodeList - An Array-like collection of nodes returned by metods like querySelectorAll()
// -> HTML Collection - An array-like collection of HTML elements returned bymethods like elementByTagName()

