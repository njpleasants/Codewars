//Codewars challenge Stringy strings 8kyu
//write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.
//P: Will be given a number that represents the length of a string.
//R: Return a string of 1s and 0s depending upon the length of the provided string.
//E: with size 4 should return : '1010'
//P:
function stringy(size) {
    let strSize = '';
    for(let i = 0; i < size; i++){
       if(i % 2 == 0){
        strSize += '1'
       }else{
        strSize += '0'
       }
    }
    return strSize;
  }

//Other Codewars challenge solutions
const stringy = size => "10".repeat(size).slice(0,size);

function stringy(size) {
    var arr = [];
  
    for(var i = 0; i < size; i++){
      if(i % 2 == 0){
        e = "1";
        arr.push(e);
  //       console.log(e);
      }else{
        e = "0";
        arr.push(e);
  //       console.log(e);
      }
    }
    
    return arr.join("");
  }

const stringy = (size) => String.repeat(10, (size + 1) >> 1).slice(0, size)

