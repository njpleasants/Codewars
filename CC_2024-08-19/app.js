//Codewars challenge Well of Ideas - Easy Version 8kyu
//For every good kata idea there seem to be quite a few bad ones!
//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
//P: You will be given an array of ideas as an argument.
//R: Return 'Publish!' if there are one or two good ideas, return 'I smell a series!' if there are more than 2 good ideas, and return 'Faily!' if there are not good ideas.
//E: (well(['bad', 'bad', 'bad']), 'Fail!');
//P:
function well(x){
    let countG = 0;
    for( const idea of x){
        if(idea == 'good') countG+= 1;
    }
    if (countG > 2) return 'I smell a series!';
    if (countG > 0) return 'Publish!';
    return 'Fail!';
}

//Other Codewars solutions
function well(x) {
    let res = []
    res = x.filter(el => el == 'good')
      if (res.length > 2) {
      return 'I smell a series!'
    } else if (res.length > 0 && res.length <= 2) {
      return 'Publish!'
    } else if (res.length < 1) {
      return 'Fail!'
    } 
  }

function well(x){
    let y = x.filter(el => el == 'good').length;
    if ( y > 0 && y < 3){
    return 'Publish!';
    } else if (y > 2){
    return 'I smell a series!';
    }else {return 'Fail!';}
    };

function well(x) {
        let countGood = 0;
        for (const state of x) {
          if (state === "good") {
            countGood += 1;
          }
        }
        if (countGood <= 0) {
          return "Fail!";
        } else if (countGood >= 3) {
          return "I smell a series!";
        } else {
          return "Publish!";
        }
      }

const  well = x => {
        let count = x.filter(el => el == 'good').length
        return  count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!'; 
      }