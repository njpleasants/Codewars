//Codewars challenge Shortest word 7kyu
//Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.
//P:String will never be empty
//R:Return the length of the shortest string.
//E:
//P:
function findShort(s){
    let result = s.split(' ').map(word => word.length).sort((a,b) => a - b);
    return result[0];
    }

//Other Codewars solutions

function findShort(s){
	var arr = s.split(' ');
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}

const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

