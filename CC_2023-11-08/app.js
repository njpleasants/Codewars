//Find Maximum and Minimum Values of a List 8kyu
//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
//P: Will have two functions and a list of integers
//R: Return the largest and lowest integers in the lists
//E:  [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
//P: 
var min = function(list){
    let min = list[0]
    for (let i = 1; i < list.length; i++){
        if (min > list[i]) {
            min = list[i]
        }
    }
    return min
}

var max = function(list){
    let max = list[0]
    for (let i = 1; i < list.length; i++){
        if (max < list[i]) {
            max = list[i]
        }
    }
    return max
}

//Other Codewars solutions

var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}