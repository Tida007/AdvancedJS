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

// Function to create a new button dynamically
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

