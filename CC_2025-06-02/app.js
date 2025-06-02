//Codewars challenge Pillars 8kyu
//There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
//P: Will be given the arguments to pass through the function with the goal of returning the distance between the first and last pillar. 
//R: Return the distance between the first and last pillar in centimeters. 
//E:  function(){
//   it("Testing for number of pillars: 1, distance: 10 m and width: 10 cm", function(){
//     assert.strictEqual(pillars(1, 10, 10) , 0);
//   });  
//P:
function pillars(numPill, dist, width) {
  return numPill > 1 ? (numPill - 2) * width + (numPill - 1) * dist *100 : 0;
  }

//Other solutions

function pillars(num_pill, dist, width) {
  if (num_pill < 2) return 0;
  const widthAllPillars = (num_pill - 2) * width;
  const distAll = (num_pill - 1) * (dist * 100);
  
  return distAll + widthAllPillars;
}

function pillars(num_pill, dist, width) {
    if (num_pill === 1) {
        return 0;
    }else{
        let distance = dist * ((num_pill -1) * 100 );
        let pillars = num_pill - 2;
        return distance + (width * pillars);
    }  
}