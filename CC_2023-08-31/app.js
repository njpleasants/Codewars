//Area or perimeter 8kyu
//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.
//P: Find out what the perimter of the rectangle is or the area of the square.
//R: Return perimeter or area of the object. 
//E: 6, 10 --> 32; 3, 3 --> 9
//P:
const areaOrPerimeter = function(l , w) {
    if ( l == w){
        return (l * w);
    } else {
        return (l + l + w + w);
    }
}

//Other Codewars solutions

const areaOrPerimeter = function(l , w) {
    return l == w ? l*w : 2*(l + w)
  };

const areaOrPerimeter = function(l , w) {
    let area = l * w;
    let perimeter = (l + w) * 2;
    
    return l === w ? area : perimeter;
  };

  const areaOrPerimeter = function(l , w) {
    if (w == l) {
      return w * l;
    }
      else {
        return 2*l+2*w;
      }
  };