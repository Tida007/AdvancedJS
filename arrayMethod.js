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