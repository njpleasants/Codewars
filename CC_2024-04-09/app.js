//Codewars challenge Isograms 7kyu
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//P:Letter case is not important. An empty string is considered an isogram.
//R:Return true if the string is an isogram and false if it is not. 
//E:isIsogram "Dermatoglyphics" = true isIsogram "moose" = false isIsogram "aba" = false
//P:
const isIsogram = str =>
    new Set(str.toLowerCase()).size == str.length
  
//Other Codewars solutions

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

