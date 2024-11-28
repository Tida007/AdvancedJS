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

