// advance javaScript syntax
const fruits = ["Apple", "Orange", "Bananna", "Coconut"];
console.log(fruits);

// adding with push
fruits.push("Cherry")
console.log(fruits);


fruits.unshift("Mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

fruits[1] = "Blueberry";
console.log(fruits);

fruits.splice(1, 0, "strawberry", "watermelon");
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// mapping
fruits.map(fruit => console.log(fruit))

let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

// filter synthax
let longFruits = fruits.filter(fruit => fruit.length > 7);
console.log(longFruits);

// find
let foundFruit = fruits.find(fruit => fruit === "Apple");
console.log(foundFruit);

// bolean
let hasBannana = fruits.includes("Bannana");
console.log(hasBannana);

let hasWatermelon = fruits.includes("Watermelon");
console.log(hasWatermelon);


// Assigment

// To concatenate two arrays in JavaScript using the concat method
// Create Two (2) Arrays
const property1 = ["BeachHouse", "Creed Avenue"];
const currency = ["$8900", "$2500"];

// Use the concat(); method to combine the arrays
const value = property1.concat(currency);

// Using map(); method to iterate over each item 
value.map(checkOutValue => console.log(checkOutValue));

// sort the combined array in ascending order using the sort(); method, with a custom comparison function
value.sort((a, b) => a - b);
console.log(value)

// finally reverse the sorted array using the reverse(); method
const reversedValue = value.reverse();
reversedValue.forEach(checkOutValue => console.log(checkOutValue));


// Array containing object data
const userInfo = [
    { id: 1, name: 'Tony', state: 'Los Angeles' },
    { id: 2, name: 'kadijah', state: 'Lagos' },
    { id: 3, name: 'william', state: 'Compton' },
    { id: 4, name: 'Percy', state: 'Detriot' },
    { id: 5, name: 'Melody', state: 'New Jersy' },
    { id: 6, name: 'Tmg', state: 'Chicago' }
];

// using map() method, to iterate through each object in the array to extract and display each data
userInfo.map(user => console.log(`userID: ${user.id}, Name: ${user.name}, State: ${user.state}`));
