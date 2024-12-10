/* The following is a brief list of common APIs in web and XML page scripting using the DOM.

document.querySelector()
document.querySelectorAll()
document.createElement()
Element.innerHTML
Element.setAttribute()
Element.getAttribute()
EventTarget.addEventListener()
HTMLElement.style
Node.appendChild()
window.onload
window.scrollTo()
*/

/* Examples of using appennedChild methods. 
Appendind an item to a list: add a new list item to the end of the list
*/

const menu = document.createElement('li');
const textnode = document.createTextNode('soda');
menu.appendChild(textnode);
document.getElementById('menuList').appendChild(menu);


/* Creating a Paragraph and Appending It: You can also create new elements dynamically. For instance, let’s create a paragraph (<p>) and append it to a <div>:...

*/

const newParagraph = document.createElement("p"); // Create a new <p> element

const node = document.createTextNode("This is a paragraph."); // Create a text node

newParagraph.appendChild(node); // Append the text node to the <p>....

document.getElementById("myDIV").appendChild(newParagraph); // Append the <p> to the <div> 


/* Moving an Item from One List to Another: Imagine you have two lists (<ul> elements), and you want to move an item from the second list to the first: 

*/
const move = document.getElementById("myList2").lastElementChild;

document.getElementById("myList1").appendChild(move); //   append it to the first list//

// Traversing an HTML table with JS & DOM interfaces.
// creating an HTML table dynamicaaly

function generateTable() {
    // 1. Create a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < 2; i++) {
        // create a table row
        const row = document.createElement("tr");
        
        for (let j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text node the content of the <td> element, and put the <td> at the end of the table row.

            const cell = document.createElement("td");
            const cellText = document.createElement('cell in row ${i}, column ${j}'); // replace with actual text
            cell.appendChild(cellText); // append the text node to the <td> element
            row.appendChild(cell); // append the <td> to the table row
        }

        // add the row to the end of the table body
        tblBody.appendChild(row); // append the <tr> to the <tbody> element
    }

    // put the <tbody> in the table
    tbl.appendChild(tblBody); // append the <tbody> to the <table> element

    document.body.appendChild(tbl); // append the <table> into the <body>
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
}