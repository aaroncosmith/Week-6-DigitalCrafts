/*
Create a class called Person which accepts the name of a person as a string, 
and his/her age as a number.

The Person class should have a method called describe which 
returns a string with the following syntax: "name, age years old". 
So for example, if John is 19 years old then the function describe of his object
will return "John, 19 years old".
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hi, my name is ${this.name}!`);
        // this is called a template literal;
    }
    describe() {
        console.log(`${this.name}, ${this.age} years old`);
    }
    // introduce a static method
    static introduce(person) {
        console.log(`This is ${person.name}, they are ${person.age} years old.`)
    }
}


const me = new Person("Aaron", 24);
me.sayHello();
me.describe();
class Teacher extends Person {
    teach(subject) {
        console.log(`${this.name} teaches ${subject}.`);
    }
}

const meAsTeacher = new Teacher("Sean", 32);
meAsTeacher.teach("Coding");
/*
Create an object called Teacher derived from the Person class,
and implement a method called teach which receives a 
string called subject, and prints out:
*/
