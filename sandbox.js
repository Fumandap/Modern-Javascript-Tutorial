// callbacks & foreach
// callback functions are functions that we pass into another function/method as an argument.

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

//callback function one way
myFunc(function(value){
    // do somethihng
    console.log(value);
});

//callback function another way
myFunc(value => {
    console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

// callback function using arrow functions
people.forEach((person, index) => {
    console.log(index, person);
});