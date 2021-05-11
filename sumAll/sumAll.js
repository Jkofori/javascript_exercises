const sumAll = function(firstNum,secondNum) {

let sum = 0;

    if(typeof(firstNum)!='number' || typeof(secondNum)!='number'){
        return 'ERROR';
    } else if(firstNum<0 || secondNum<0){
        return 'ERROR';
    }

    if(firstNum<secondNum){
        for(count=firstNum;count<=secondNum;count++){
            sum += count;
        }
    } else {
        for(count=secondNum;count<=firstNum;count++){
            sum += count;
        }
    }

    return sum;

}

module.exports = sumAll
