//Codewars challenge 101 Dalmatians - squash the bugs, not the dogs! 8kyu
//Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.
//P: Debug the function that has been provided
//R: Return the function without errors so the function returns the number of dogs your friend has.
//E:
// assert.strictEqual(howManyDalmatians(26), "More than a handful!");
//     assert.strictEqual(howManyDalmatians(8), "Hardly any");
//     assert.strictEqual(howManyDalmatians(14), "More than a handful!");
//     assert.strictEqual(howManyDalmatians(80), "Woah that's a lot of dogs!");
//     assert.strictEqual(howManyDalmatians(100), "Woah that's a lot of dogs!");
//     assert.strictEqual(howManyDalmatians(101), "101 DALMATIANS!!!");
//P:
// function howManyDalmations(numer :
  
//     var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
    
//     var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
    
//   return respond
  

//Solution
function howManyDalmatians(number){
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    return number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ? dogs[3] : dogs[2]
}
    

  
   
  