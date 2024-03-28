//Codewars challenge Keep Hydrated 8kyu
//Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value
//P: Will be given the number of hours/unit of time
//R: Return the number of litres Nathan will drink rounded to the smallest value.
//E: time = 3 ----> litres = 1  time = 6.7---> litres = 3
//P:
function litres(time) {
    let litres = Math.floor(time * 0.5)
    return litres;
  }

  //Other Codewars solutions
  const litres = time => Math.floor(time * 0.5);