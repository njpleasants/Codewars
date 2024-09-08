//Codewars challenge Hello, Name or World! 8kyu
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String). Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
//P: Will be given a name or empty string to integrate into the "hello" message
//R: Return the phrase "Hello, name!" with the provided name or "Hello, World!" if the string is empty.
//E: * With `name` = "john"  => return "Hello, John!" * With `name` = "aliCE" => return "Hello, Alice!" * With `name` not given or `name` = ""        => return "Hello, World!"
//P:
function hello(name) {
    if(!name){
      return 'Hello, World!';
      } else {
        return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
      }
    }

//Other solutions

const hello = s =>
    `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

function hello(name){
    if (name){
      return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
      return "Hello, World!";
    }
}

function hello(name) {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
  }

