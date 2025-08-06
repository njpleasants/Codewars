//Codewars challenge Quadrants 8kyu
//Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.
//There are four quadrants:
// First quadrant, the quadrant in the top-right, contains all points with positive X and Y
// Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
// Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
// Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y

//P:Given two non-zero integers, return the quadrant that corresponds with the two integers.
//R: Return the correct quadrant given the two provided integers.
//E: (-10, 100) => 2
//P:
function quadrant(x, y) {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  return 4;
}

//Other solutions

function quadrant(x, y) {
  const area = [
    [2,1],
    [3,4]
  ]

  const xa = x > 0 ? 1 : 0
  const ya = y > 0 ? 0 : 1

  return area[ya][xa];
}

function quadrant(x, y) {
  return x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;
}

function quadrant(x, y) {
  const firstQuadrant = x > 0 && y > 0;
  const secondQuadrant = x < 0 && y > 0;
  const thirdQuadrant = x < 0 && y < 0;
  const fourthQuadrant = x > 0 && y < 0;
  
  if (firstQuadrant) {
    return 1;
  } else if (secondQuadrant) {
    return 2;
  } else if (thirdQuadrant) {
    return 3;
  } else if (fourthQuadrant) {
    return 4;
  }
}
