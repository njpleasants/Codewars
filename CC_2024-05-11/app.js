//Codewars challenge I love you, a little , a lot, passionately ... not at all 8kyu
//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

//P: You will be given a number of petals as the parameter.
//R: Return the appropriate phrase given the number of petals on the flower.
//E: (howMuchILoveYou(7),"I love you")
//P:
function howMuchILoveYou(nbPetals) {
    return ["not at all", "I love you", "a little", "a lot", "passionately", "madly"][nbPetals % 6]
}

//Other Codewars solutions
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}

function howMuchILoveYou(nbPetals) {
    let phrase = {    
      0: "not at all",
      1: "I love you"
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
    }
    return phrase[nbPetals%6]
  }

function howMuchILoveYou(nbPetals) {
    switch ((nbPetals - 1) % 6) {
        case 1:
            return "a little";
        case 2:
            return "a lot";
        case 3:
            return "passionately";
        case 4:
            return "madly";
        case 5:
            return "not at all";
        default:
            return "I love you";
    }
}