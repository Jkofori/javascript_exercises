const repeatString = function(word,count) {
    let output = '';

    if(count>0){
        for(i=0;i<count;++i){
            output += word;
        }
    } else if(count<0){
        output = 'ERROR';
    }

    return output;
}

module.exports = repeatString
