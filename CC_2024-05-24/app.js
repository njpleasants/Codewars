//Codewars challenge Welcome to the city 8kyu
//Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
//P: Will be given thre parameters to pass into a phrase.
//R: Return the phrase with the parameters including several possible names.
//E: ['John', 'Smith'], 'Phoenix', 'Arizona'
//This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
//P:
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

//Other solutions
const sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`

function sayHello( name, city, state ) {
    return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
  }

function sayHello( name, city, state ) {
    let fullName = name.join(" ");  
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
  }