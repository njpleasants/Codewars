//Find numbers which are divisible by given number 8kyu
//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
//P: Will be given two arguments.
//R: Must return one array of divisor numbers for the provided array.
//E: [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
//P:
divisibleBy = (numbers, divisor) => numbers.filter(x => x % divisor == 0)

//Other Codewars solutions
function divisibleBy(numbers, divisor){
    let answer = []
     numbers.map(x => {
     if(x % divisor === 0){
       answer.push(x)}
     } )
     return answer
    }

function divisibleBy(numbers, divisor) {
        var newArr = [];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % divisor === 0) {
                newArr.push(numbers[i]);
            } 
        }
    return newArr;
    }

const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));