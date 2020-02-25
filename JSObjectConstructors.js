function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

//#1
const sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4948");
console.log(sonny);
//#2
const jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");
console.log(jordan);
//#3
sonny.greet(jordan);
//#4
jordan.greet(sonny);
//#5
console.log(`${sonny.name}'s contact info is: ${sonny.email}, ${sonny.phone}.`);
//#6
console.log(`${jordan.name}'s contact info is: ${jordan.email}, ${jordan.phone}.`);

// Card constructor
class Card {
    constructor(point,suit){
        this.point = point;
        this.suit = suit;
    }
}

const myCard = new Card(5, "diamonds");
console.log(myCard);

//getImageUrl()
Card.prototype.getImageUrl = function() {
    console.log(`images/${this.point}_of_${this.suit}.png`)
}
myCard.getImageUrl();

//Hand Constructor
class
