//My Head Is At The Wrong End! 8kyu
//You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logic.
//P: Will be given an array with three values.
//R: Return the array in the order head, body, tail
//E: (fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
//P:
function fixTheMeerkat(arr) {
    return arr.reverse();
   }

//Other Codewars solutions

const fixTheMeerkat=arr=>arr.reverse();