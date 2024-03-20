//Codewars challenge Switch It Up 8kyu
//When provided with a number between 0-9, return it in words.
//P:You will be provided with a number
//R:Return the number  in words
//E: Input :: 1, Output :: "One".
//P:
function switchItUp(number){
    const numbers = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    }
    return numbers[number]
    }

    //Other Codewars solutions
    function switchItUp(number){
        let nums = {0:'Zero',1:'One',2:'Two',3:'Three',4:'Four',5:'Five',6:'Six',7:'Seven',8:'Eight',9:'Nine'};
        return nums[number];
      }