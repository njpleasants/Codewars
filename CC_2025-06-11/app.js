//Codewars challenge Find Nearest Square Number 8kyu
//Your task is to find the nearest square number of a positive integer n. In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// For example, if n = 111, then the nearest square number equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If n is already a perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

//P: Find the closest square number of a positive integer (n).
//R: Return the closest square number or if it is a perfect square return n.
//E:
//P:
function nearestSq(n){
        return Math.pow(Math.round(Math.sqrt(n)), 2);
    }

//Other solutions

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

