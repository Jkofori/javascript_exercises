const fibonacci = function(fibPosition) {

    let fibArray = [1,1];
    let fibInput = parseInt(fibPosition);

    if(fibInput<1){
        return 'OOPS';
    } else if(fibInput==1 || fibInput == 2){
        return fibArray[fibInput-1];
    }

    while(fibArray.length<fibInput){
        let newValue = fibArray[fibArray.length-1]+fibArray[fibArray.length-2];
        fibArray.push(newValue);
    }

    return fibArray[fibInput-1];


}

module.exports = fibonacci
