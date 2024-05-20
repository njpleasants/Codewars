//Codewars challenge Multiplication Table for Number 8kyu
//Your goal is to return multiplication table for number that is always an integer from 1 to 10.
//P: You will be given a number to pass through a multiplication table.
//R: Return number that is an integer from 1 to 10 by each number in the multiplication table.
//E: multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
//P:
function multiTable(number) {
   const rows = []
   for(let i = 1; i <= 10; i++){
    rows.push(`${i} * ${number} = ${i * number}`)
   }
   return rows.join('\n')
  }

//Other Codewars solutions
const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')

const multiTable = n => Array.from(Array(10), (e, i) => `${++i} * ${n} = ${i * n}`).join('\n');
