//Codewars challenge How many lightsabers do you own? 8kyu
//nspired by the development team at Vooza, write the function that accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// Note: your function should have a default parameter.
//P: Will be given a name as a parameter.
//R: Return how many lightsabers the person owns depending upon the name you are given.
//E: "anyone else" --> 0 "Zach" --> 18
//P:
function howManyLightsabersDoYouOwn(name) {
    if(name === 'Zach'){
        return 18;
    }else{
        return 0;
    }
  }

//Other Codewars solutions
const howManyLightsabersDoYouOwn = name => name == "Zach" ? 18 : 0;

function howManyLightsabersDoYouOwn(person) {
    return person == "Zach" ? 18 : 0;
  }

