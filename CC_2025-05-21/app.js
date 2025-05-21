//Codewars challenge Swap Values 8kyu
//I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing. Can you figure out what's wrong here?
//P: Given a function, debug to correct the function so it returns the array with the swapped values.
//R: Return the array with two elements swapped. 
//E:
//P:
function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}
//solution
function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

//Other solutions

function swapValues(arr) {
    return arr.reverse();
}

swapValues=args=>args.reverse()