//Codewars challenge Grasshopper - Terminal game combat function 8kyu
//Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
//P:
//R:
//E:
//P:
function combat(health, damage) {
    if(health > 0 && damage < health){
        return health - damage;
    } else {
        return 0;
    }
  }

//Other Codewars solutions

function combat(health, damage) {
	return health < damage ? 0 : health - damage
}

const combat = (health, damage) => Math.max(0, health - damage);

const combat = (health, damage) => health < damage ? 0 : health - damage;
