//Codewars challenge Alan Partridge II - Apple Turnover 8kyu
//Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.
//Note: Input will either be a positive integer (or a string for untyped languages).
//P: Will be given a parameter. Return the appropriate response given the value of the parameter. 
//R: If the x squared is greater than 1000, return "It's hotter than the sun!!", else return "Help yourself to a honeycomb Yorkie for the glovebox."
//E:apple('50'), 'It\'s hotter than the sun!!'); 
//P:
function apple(x){
    if (x * x > 1000){
        return "It's hotter than the sun!!";
    }else {
        return "Help yourself to a honeycomb Yorkie for the glovebox.";
    }
}

//Other solutions

function apple(x){
    return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
  }

function apple(x){
  
    if (Math.pow(x,2) > 1000) {
      return "It's hotter than the sun!!";
    } else {
      return "Help yourself to a honeycomb Yorkie for the glovebox.";
    
    }
  
  }

const apple = x => (x * x > 1000)? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";