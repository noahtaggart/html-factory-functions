/*// Object representing Ringer
const dog = {
    name: "Ringer",
    age: 4,
    breed: "Cocker Spaniel"
}

// Define a function to convert the object to a string
const dogHTMLMaker = (dogObject) => {
    // Make some HTML to represent the dog
    const dogHTMLSection = "<section>${dogObject.name} the ${dogObject.breed} is ${dogObject.age} years old/section>"

    // Return the HTML
    return dogHTMLSection
}

// Invoke the function and give the minion what it needs to do its job.
const stringReturnedFromFunction = dogHTMLMaker(dog)

console.log(stringReturnedFromFunction)

> "<section>Ringer the Cocker Spaniel is 4 years old/section>"
*/

const computer = {
    id: 1,
    manufacturer: "Apple",
    make: "Macbook",
    model: "Pro",
    specs: {
        memory: 32,
        hardDrive: "500 GB",
        processor: 2.4
    }
}

const compHTMLMaker = (compObject) => {
    const compHTMLSection = "<section id=`computer--${computer.id}`><h1>`${computer.manufacturer} ${computer.make}`</h1><div>Model: `${computer.model}`</div><div>Memory: `${computer.specs.memory}`</div><div>Hard drive space: `${computer.specs.harddrive}`</div><div>Processor speed: `${computer.specs.processor}`</div></section>"
    return compHTMLSection
}

const computerResult = compHTMLMaker(computer)

console.log(computerResult)