//Codewars challenge Enumerable Magic - Does My List Include This? 8kyu
//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
//P: Will create a method that returns true or false depending on whether an item is in the given list.
//R: Return true if the item is in the list; otherwise return false. 
//E: (include([1,2,3,4], 3), true )
//P:
function include(arr, item){
  return arr.includes(item);
}

//Other solutions

const include = (arr, item) =>
  arr.includes(item)

