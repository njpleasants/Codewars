//Codewars challenge Count the Monkeys 8kyu
//You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1. As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
//P: You will be given a number
//R: Return an array with all the integers leading up the the given number but excluding zero.
//E: 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]     1 --> [1]
//P:
function monkeyCount(n) {
    let monkeys = [];
    for(let i =1; i < n+1; i++){
        monkeys.push(i);
    }
        return monkeys;
    }

//Other Codewars solutions

function monkeyCount(n) {
    for (var i = 0, arr = []; i < n; arr.push(++i));
    
    return arr;
}

function monkeyCount(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
}