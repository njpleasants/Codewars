//Codewars challenge USD => CNY 8kyu
//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
//P: Given an integer, return that integer as a string to represent Chinese Yuan
//R: Return the conversion of the integer to Chinese Yuan as a string followed by the statement "Chinese Yuan"
//E: 465 -> '3138.75 Chinese Yuan'
//P:
function usdcny(usd) {
    let cny = (usd * 6.75).toFixed(2);
    return `${cny} Chinese Yuan`;
}

//Other solutions

const usdcny = usd => `${(usd*6.75).toFixed(2)} Chinese Yuan`;

