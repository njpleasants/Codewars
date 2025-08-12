//Codewars challenge Miles per gallon to kilometers per liter 8kyu
//Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Your answer should be accurate within 0.01 kpl.

// Some useful associations relevant to this kata:

// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

//P: Given miles per imperial gallon conver to kilometers per liter. 
//R: Return kilometers per liter. 
//E: 
//P:
function converter (mpg) {
  let total = Math.round(mpg / 4.54609188 * 1.609344 * 100) / 100
  return total;//code to convert miles per imperial gallon to kilometers per liter
}

//Other solutions

function converter (mpg) {
  return +(mpg * .354006043538).toFixed(2)
}