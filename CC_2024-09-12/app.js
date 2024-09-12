//Codewars challenge No Zeros for Heros 8kyu
//Numbers ending with zeros are boring. They might be fun in your world, but not here. Get rid of them. Only the ending ones.
//P: Will be given integers. 
//R: Return the number without a zero on the end if there is one. 
//E: 1450 -> 145
//P:
function noBoringZeros(n) {
        let remZ = n.toString().split('')
        while(remZ[remZ.length - 1] === '0') {
            remZ.pop();
            }
            return +remZ.join('');
          }
        
//Other solutions

function noBoringZeros(n) {

    while (n%10==0 && n!=0) {
    n = n/10;
    }
    return n;
  
  }

const noBoringZeros = (n) => {
    if (n === 0) return 0;
    n = String(n).split('');
  
    for (let i = n.length - 1; i > 0; i--) {
      if (n[i] === '0') {
        n.pop();
      } else {
        return +n.join('');
      }
    }
  };

  function noBoringZeros(n) {
    // your code
    
    if(n === 0){
      return 0
    }
  
    let string = n.toString()
    
    while(string.slice(-1) === '0'){
      string = string.slice(0, -1)
    }
    
    const answer = +string
    return answer
    
  }

