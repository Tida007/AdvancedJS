// A closure is a feature where an inner function has access
// to the variables of its outer function, even after the 
// outer function has finished executing.

function outerFunction(){
    const outerVariable = "I am from the outer function"

    function innerFunction() {
        console.log(outerVariable)
    }
    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();  // Output: I am from the outer function

function createCounter(){
    let counter = 0;

    return function () {
        counter++;
        return counter;
    };
}

const counterFunction = createCounter();
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction()); 