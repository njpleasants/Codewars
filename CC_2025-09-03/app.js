//Codewars challenge Triple Trouble 8kyu
//Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
//P: Given three strings, return one string that is a combination of all the first letters of the strings combined and so on.
//R: Return one string that is a result of adding the first letters of each string together followed by the second, the third, and so on. 
//E: Input: "aa", "bb" , "cc" => Output: "abcabc"
//P:
function tripleTrouble(one, two, three){
    let newString = ''
  for (let i = 0; i < one.length; i++) {
    newString += `${one[i]}${two[i]}${three[i]}`
  }

  return newString;
}


//Other solutions
function tripleTrouble(one, two, three) {
  var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}

const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");