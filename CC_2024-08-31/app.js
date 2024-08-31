//Codewars challenge Gravity Flip 8kyu
//Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.
//There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right).
//Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

//P: You will be given columns of cubes on the right and left side.
//R: Return the number of cubes in each column once gravity switches.
//E: * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
//P:
const flip=(d, a)=>{
    return d == 'R' ? a.sort((x,y) => x - y) : a.sort((x,y) => y - x)
  }

//Other solutions

const flip=(d, a)=>{
    if(d === 'R') return a.sort((a,b)=>a-b);
    if(d === 'L') return a.sort((a,b)=>b-a);
  }

const flip=(d, a)=>{
    if (d=="R")
      a.sort((b,c)=>b-c);
    else
      a.sort((b,c)=>c-b);
    return a;
  }