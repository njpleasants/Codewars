//Codewars challenge Remove First and Last Character Part Two 8kyu
//You are given a string containing a sequence of character sequences separated by commas.

//Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

//If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

//P:Given a string with characters separated by commas, return string wihtout first and last characters with new string   separated by spaces 
//R:Return new string without first and last characters and new string separated by spaces
//E:"1,2,3,4"    =>  "2 3"
//P:
function array(string) {
    //turn string into array, split array, shift and pop, join array with spaces separating each element
    return string.split(',').slice(1,-1).join(' ') || null;
}

//Other Codewars solutions

const array = arr => arr.split(',').slice(1,-1).join(' ') || null