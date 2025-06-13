//Codewars challenge Training JS #5: Basic data types--Object 8kyu
//In JavaScript, Object is one of basic data types. To define an object you can use let obj = new Object() or let obj = {}.

// You can define the object attributes during initialization, like this:

// let animal = {name: "dog"}
// you can also set/get some properties after the object definition, like this:

// let animal = {}
// animal.name = "dog"
// // or:
// animal["name"] = "dog"
// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."

//P: Will be given an object with attributes. 
//R: Return a string with the object attributes.
//E: {name:"dog",legs:4,color:"white"} "This white dog has 4 legs."
//P:
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
