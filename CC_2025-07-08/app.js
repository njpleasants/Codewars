//Codewars challenge Return to Sanity 8kyu
//This function should return an object, but it's not doing what's intended. What's wrong?
//P: Given a function, debug so it return's an object.
//R: Return an object.
//E:
//P:
function mystery() {
  var results =
    {sanity: 'Hello'};
  return results;
}

//Solution
function mystery() {
  let results =
    {sanity: 'Hello'};
  return results;
}

//Other solutions

const mystery = () => ({sanity: 'Hello'});

