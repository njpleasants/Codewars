//Codewars challenge Removing Elements 8kyu
//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//P: There will be no empty arrays
//R: Return every second element in the array
//E: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//P:
function removeEveryOther(arr){
    return arr.filter(function(elem,index) {
        return index % 2 === 0;
    });
    }
   
//Other Codewars solutions

const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);

function removeEveryOther(arr){
    return arr.filter((_, i) => i % 2 === 0 )
  }