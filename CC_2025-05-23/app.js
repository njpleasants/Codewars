//Codewars challenge Sum of Multiples 8kyu
//Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
//P: Given two numbers, find the sum of all the multiples between n and m.
//R: Return the sum of all the multiples between the two given numbers.
//E: sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
//P:
function sumMul(n,m){
    if (n >= m)
        return 'INVALID';
    let total = 0; 
    let i = n;
    while (i < m){
        total += i;
        i += n;
          }
    return total;
     }
 
//Other solutions
function sumMul(n,m){
if(m <= 0 || n <= 0 ) {return "INVALID";}
let res = 0;
for(let i = 0; i < m; i+= n){
res += i;}
return res;
}

function sumMul(n,m){
  if (n <= 0 || m <= 0) {
    return "INVALID";
  }
  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}