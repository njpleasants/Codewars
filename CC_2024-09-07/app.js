//Codewars challenge Bin to Decimal 8kyu
//Complete the function which converts a binary number (given as a string) to a decimal number.
//P: 
//R:
//E:
//P:
function binToDec(bin) {
    return parseInt(bin,2);
   }

//Other solutions
const binToDec = bin => parseInt(bin,2);

binToDec=n=>parseInt(n,2)

function binToDec(bin){
    let result = 0;
    for (let i = 0; i < bin.length; i++) {
      if (bin[bin.length-i-1] == 1) {
      result+=Math.pow(2,i);
      }
    }
    return result;
  }
  

