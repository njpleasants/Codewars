//Codewars challenge Regular Ball Super Ball 8kyu
//Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated. If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
//P: Will be given a class of ball
//R: Return "ball type" of "regular" if no argument is given.
//E: ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"
//P:
var Ball = function(ballType) {
    if(ballType){
        this.ballType = ballType
    }else{
        this.ballType = 'regular'
    }
  };

//Other solutions

var Ball = function(ballType) {
    this.ballType = ballType || 'regular';
  };

class Ball {
    constructor(ballType = "regular") {
      this.ballType = ballType;
    }
  }

var Ball = function(ballType) {
    this.ballType = typeof ballType !== 'undefined' ? ballType : 'regular';
};