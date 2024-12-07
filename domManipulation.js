const button = document.getElementById('button');
button.addEventListener('click', ()=>{
    alert('you just clicked on button')
})

// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('button');
// button.addEventListener( 'click', () => {
//     alert('you just clicked on button')
// })

// });



// Assignment DOM Manipulation

// Select the primary button
const btn = document.getElementById('btn');

// 1. Add an event listener to the primary button
btn.addEventListener('click', () => {
    changeText();
    createResetButton();  
});

// Function to change the text of the demo paragraph
function changeText() {
    document.getElementById("demo").innerHTML = "Test running programm";
}

// Function to create a new button (dynamically)
function createResetButton() {
    if (document.getElementById('reset-btn')) {
        return;
    }

    // 2. Create a new button element
    const resetBtn = document.createElement('button');
    resetBtn.id = 'reset-btn';
    resetBtn.textContent = 'Reset';

    // Append the reset button to the body
    document.body.appendChild(resetBtn);

    // Add an event listener to the reset button
    resetBtn.addEventListener('click', () => {
        resetToDefault();
    });

}

// Function to reset the text to its default value
function resetToDefault() {
    // Reset the paragraph text
    document.getElementById("demo").innerHTML = "This is a paragraph";

    // Remove the reset button after clicking
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.remove();
    }
}  

// Mozilla tryout
// Setting text Content..
const story = document.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
    story.textContent = "It was a dark and stormy night...";
});

// clear the text Content.
const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
    story.textContent = "";
});


// Adding a child element
const parent = document.body.querySelector(".parent"); //access the <div> and button

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
    parent.textContent = "still test running programm..";

    if (parent.childNodes.length > 1) {
        return;
    }

    const child = document.createElement("div"); // create element
    child.classList.add("child");
    child.textContent = "JavaScript Dom..";
    parent.appendChild(child); // to add the child
});

// To remove the child element when clicked
const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
    const child = document.body.querySelector(".child");
    parent.removeChild(child);
});



const title = document.querySelector(".title");
title.textContent = "DOM Manipulation";
title.style.color = "blue";

const newElement = document.createElement("div"); // create element
newElement.textContent = "second Title";
document.body.appendChild(newElement); // to add the child


// DOM API..
// Reading & Modifying the DOM
// suppose author wants to change h2 header--> and write more paragrahs..the following script does the job:

function change() {
    // document.getEelementByTagname('h2') returns a NodeList of (h2)
    // element in the document, and the first is number 0:
    const header = document.getElementsByTagName('h2').item(0); // get the first h2 element

    // The firstChild of the header is a Text node:
    header.firstChild.data = "A dynamic document";

    // NOW header is "A dynamic document"

    // Access the pagraph in the document:
    const para = document.getElementsById('college').item(0);
    para.firstChild.data = "Test 123"; // change the text of the first paragraph

    // Create a new Text node for the second paragraph:
    const para2 = document.createTextNode("Test 456"); // create a new text node

    // Create a new Element for the second paragraph:
    const para3 = document.createElement('p'); // create a new element

    // Append the new text node to the second paragraph:
    para3.appendChild(para2);

    // Append the paragraph of the document to the body (which is the parent of para):
    para.parentNode.appendChild(para3);
}