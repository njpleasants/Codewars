//Codewars challenge Difference of Volumes of Cuboids 8kyu
//In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

//P: You will calculate the volume of each cuboid and find the difference in the volume of the two objects.
//R: Return the difference of cuboid a and cuboid b
//E: (findDifference([3, 2, 5], [1, 4, 4]), 14);
//P:
function findDifference(a, b) {
   return Math.abs((a[0] * a[1] * a[2]) - b[0] * b[1] * b[2])
  }

//Other Codewars solutions
function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }

function findDifference(a, b) {
    return Math.abs(a.reduce((a,b)=>a*b) - b.reduce((a,b)=> a*b))
  }

  