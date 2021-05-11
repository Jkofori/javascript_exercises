const reverseString = function(string) {
    let stringOrder = [];

    for(i=string.length;i>0;--i){
        stringOrder.push(string.charAt(i-1));
    }

    let reversedWord = '';

    for(i=0;i<string.length;i++){
        reversedWord += stringOrder[i];
    }
    
    return reversedWord;
}

module.exports = reverseString
