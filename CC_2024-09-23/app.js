//Codewars challenge Find out whether the shape is a cube 8kyu
//To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

//P: Will be given the volume and length of a shape.
//R: Return whether or not the shape is a cube based on the length and volume
//E:
//P:
function cubeChecker(volume, side){
    if(volume <= 0 || side <= 0){
        return false;
    }
    if(volume == side ** 3){
        return true;
    }else{
        return false;
    }
  }

//Other solutions

var cubeChecker = function(volume, side){
    return Math.pow(side, 3) === volume && side > 0;
  };

var cubeChecker = function(volume, side){
    return volume > 0 ? side*side*side === volume : false;
  };

const cubeChecker = (volume, side) => volume > 0 && side > 0 && volume === Math.pow(side, 3);


