//Codewars challenge Do you speak "English"? 8kyu
//Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

//P: Given a string determine if the word english is included in the string.
//R: Return true or false if the word english is in the string. It is not case sensitive.
//E: 
//P:
function spEng(sentence){
if(sentence.toLowerCase().includes('english')){
    return true;
}else{
    return false;
    }
}

//Other solutions
function spEng(s){
   return /english/i.test(s)
}

function spEng(s){
	return s.toLowerCase().indexOf('english')!=-1
}