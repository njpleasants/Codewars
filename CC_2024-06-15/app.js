//Codewars challenge What is Between 8kyu
//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//P:Will be given two integers  
//R:Return an array of the given two integers and all of the integers between them.
//E:a = 1 b = 4 --> [1, 2, 3, 4]
//P
function between(a, b) {
    // iterate through array adding i++ each time
    const newArray = []
    for (let i = a; i <= b; i++) {
        newArray.push(i)
        } 
        return newArray;
  }
  