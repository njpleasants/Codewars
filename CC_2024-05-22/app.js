//Codewars challenge A Wolf in Sheep's Clothing 8kyu
//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

//P: You will be given an array that includes sheep and one wolf.
//R: Return a string that alerts the farmer if they are closest to the sheep. Otherwise, return an alert that the sheep in front of the wolf it is about to be eaten.
//E: Input: ["sheep", "sheep", "sheep", "wolf", "sheep"] Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//P:
function warnTheSheep(queue) {
    const reversed = queue.reverse();
    const index = reversed.indexOf('wolf');
    if(index === 0){
        return "Pls go away and stop eating my sheep";
    } else {
        return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
    }
}

//Other Codewars solutions
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }

function warnTheSheep(queue) {
    let sheepIndex = queue.length - queue.indexOf('wolf') - 1;
    if (sheepIndex === 0)
        return 'Pls go away and stop eating my sheep';
    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}

const warnTheSheep = a => (a = a.length - a.indexOf('wolf') - 1) ?
  `Oi! Sheep number ${a}! You are about to be eaten by a wolf!`:
  'Pls go away and stop eating my sheep';
