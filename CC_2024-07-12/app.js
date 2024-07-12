//Codewars challenge FlickSwitch 8kyu
//Create a function that always returns True/true for every item in a given list. However, if an element is the word 'flick', switch to always returning the opposite boolean value.
//P: Will be given an array of words.
//R: Return the opposite boolean value if the word 'flick' is in the array. Return the opposite value if the word 'flick' is encountered again.
//E: assert.deepEqual(flickSwitch(["codewars", "flick", "code", "wars"]), [true, false, false, false]); (flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]), [true, true, false, false, true]);
//P:
function flickSwitch(arr){
    let mySwitch = true
    let newArr = []
    for(let item of arr){
        if(item === 'flick'){
            mySwitch = !mySwitch
            newArr.push(mySwitch)
        } else {
            newArr.push(mySwitch)
        }
}    return newArr;
  }

//Other Codewars solutions

const flickSwitch = (arr) => {
    let element = true;
    return arr.map((i) => {
        if (i === "flick") {
            element = !element
        };
        return element
    });
};

