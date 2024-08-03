//Codewars challenge Filter Out the Geese 8kyu
//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
//The geese are any strings in the following array, which is pre-populated in your solution:
//P: Will be given an array of strings.
//R: Return the array with all of the strings except the geese.
//E:
//P:
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let result = []
    for(let i = 0; i < birds.length; i++){
        if(birds[i] != geese[0] && birds[i] != geese[1] && birds[i] != geese[2] && birds[i] != geese[3] && birds[i] != geese[4]){
            result.push(birds[i])
        }
    }
    return result
  }

//Other Codewars challenge solutions
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
  };

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
  var newArray = [];
    for (var i =0;i<birds.length;i++) {
    if (!geese.includes(birds[i])) {
      newArray.push(birds[i]);
    }
  
    
    }
  return newArray;
  };

