//Codewars challenge Will There Be Enough Space 8kyu
//Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers. You have to write a function that accepts three parameters:
//cap is the amount of people the bus can hold excluding the driver.
//on is the number of people on the bus excluding the driver.
//wait is the number of people waiting to get on to the bus excluding the driver.
//If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
//P:You will have passengers
//R:Return whether or not there is enough space on the bus and if there isn't room, return the number of passengers he cannot take.
//E:cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
//P:
function enough(cap, on, wait) {
    if(cap - (on + wait) >= 0){
        return 0;
    } 
    else{
        return (on + wait) - cap;
    }
}

//Other Codewars solutions
function enough(cap, on, wait) {
    return cap - wait - on < 0 ? on + wait - cap : 0;
  }

