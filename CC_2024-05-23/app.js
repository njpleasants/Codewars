//Codewars challenge The "if" function 8kyu
//Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2. When bool is truthy, func1 should be called, otherwise call the func2.
//P: Will be given three arguments as parameters of your function.
//R: Return the boolean argument first. If it is truthy, call func1. When it is flasy call func2.
//E: _if(true, function(){console.log("True")}, function(){console.log("false")})
//P:
function _if(bool, func1, func2) {
    if(bool == true){
        return func1();
    } else {
        return func2();
    }
}