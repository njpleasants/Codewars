//Codewars challenge Is the String Uppercase 8kyu
//Create a method to see whether the string is ALL CAPS.
//P: Will be given a string 
//R: Must return a boolean to say whether or not the string is all caps. 
//E: assert.strictEqual('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
//P:
String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
}

//Other Codewars solutions
String.prototype.isUpperCase = function(){
    if(this.toString() == this.toUpperCase()){
      return true;
    } else{
      return false;
    }
  }

String.prototype.isUpperCase = function() {
    let str = this.split('');
    for(let i = 0; i < str.length; i++){
      if(str[i] !== str[i].toUpperCase()) {
        return false;
      }
    }
      return true;
}