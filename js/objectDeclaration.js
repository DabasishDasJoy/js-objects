/* 
    Objects can be created in different ways
*/

// 1. By object literals
const person = {}; // {} -> creates an objects known as objects literals

person.name = "joy";
person.age = "60";
person.address = [
    { street: "sadar ghat" },
    { city: "bandarban" },
    { county: "Bangladesh" }
];
person.play = () => {
    console.log("Plays Cricket");
};

console.log(person.play);
person.play();

// 2.Object Construtor
/* 
    Object constructor Object() creates a new object. 
*/

const person1 = new Object();
person1.name = "Contructor";
person1.age = "10";

console.log(person1.name);

// 3. By create() method 
/* 
    Create method creates a new objects.
    Create method follows the prototypical chain. That inheritance in easy word. 
    It creats a reference to the given object.
    It must have an superclass object or a null.
    It creats a prototypical chain linked with the given paramenter object.
*/

const person3 = Object.create(person);
console.log(person3); // returns a object reference only
console.log(person3.name); // returns the value of the super class or in prototypical chained objects


// 4. By implementing constructor function
/* 
    Basically a function that creates a new object. 
    It used before ES6. 
    In class or an object has a built in constructior function
    Overriding that function can be done here
*/

function car(name, color) { // constructor function of an object called car
    this.name = name; //creates a property called name in the tesla object.
    this.color = color; //As well as before one.
}

const tesla = new car("Tesla", "blue");
console.log(tesla);

// 5. By creating class

class Book { //class name should start with upperCase
    author = "Dabsaish";
    type = "Science Fiction";
    constructor(price, publisher) {
        this.price = price; //creates a property price
        this.publisher = publisher;
    }
}

const newBook = new Book(700, "Rokomari"); //Creates a new object of Book Type
const anotherBook = new Book(500, "Lecture");
console.log(newBook);
console.log(anotherBook);