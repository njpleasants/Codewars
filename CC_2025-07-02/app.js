//Codewars challenge Multiple of Index 8kyu
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
//P: Will be given an array of elements.
//R: Return a new array with elements that are multiples of their own index.
//E: [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
//P:
function multipleOfIndex(array) {
return array.filter((element, index) => element % index == 0 || element == 0)
}

//Other solutions

const multipleOfIndex = array => 
array.filter((element, index) => element % index == 0 || element == 0)

function multipleOfIndex(array) {
  let res = []
  
  if(array[0] === 0){
    res.push(array[0])
  }
  
  for(let i = 1; i < array.length; i++){
    if(array[i] % i === 0){
      res.push(array[i])
    }
  }
  return res
}

function multipleOfIndex(array) {
  let arrMulti = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % i === 0) {
      arrMulti.push(array[i]);
    } else if(array[i] === 0) {
      arrMulti.push(array[i]);
    }
  }
  return arrMulti;
}