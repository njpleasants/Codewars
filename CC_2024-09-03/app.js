//Codewars challenge Add Length 8kyu
//Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element. Note: String will have at least one element; words will always be separated by a space.
//P: Will be given a string as a parameter.
//R: Return an array with the provided string, the length of the string, and a space between each element. 
//E:
//P:
function addLength(str) {
    let splitStr = str.split(' ')
    let newArr = []
    for(let i = 0; i < splitStr.length; i++){
        newArr.push(splitStr[i] + ' ' + splitStr[i].length)
    }
        return newArr;
    }

//Other solutions

function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
  }

var addLength = s => s.split(' ').map(x => x + ' ' + x.length);

function addLength(str){
    return str.split(" ").map( word => `${word} ${word.length}`)
  }

function addLength(str) {
    return str.split(' ').map(word => word + ' ' + word.length)
  }
