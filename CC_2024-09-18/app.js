//Codewars challenge Surface Area and Volume of a Box 8kyu
//Write a function that returns the total surface area and volume of a box as an array: [area, volume]
//P: Will be given parameters of width, height, and depth of a box.
//R: Return the area and volume of the box in the form of an array.
//E: getSize(4, 2, 6), [88, 48]);  
//P:
function getSize(width, height, depth){
    let sArea = 2 * (depth * width) + 2 * (depth * height) + 2 * (width * height);
    let volume = width * height * depth;
    let arr = [sArea, volume];
    return arr;
}

//Other solutions

const getSize = (w, h, d) => [
    (w * h + w * d + h * d) * 2,
    w * h * d
  ];

const getSize = (width, height, depth) => [2 * (width * height  + height * depth + width * depth), width * height * depth];

getSize=(w, h, d)=>[w*h*2+w*d*2+h*d*2,w*h*d]

