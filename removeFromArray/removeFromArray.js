const removeFromArray = function(array, ...removedValues) {

    let newArray = [];
    let add = true;

    for(arrayIndex=0;arrayIndex<array.length;++arrayIndex){

        for(removeIndex=0;removeIndex<removedValues.length;++removeIndex){
            if(removedValues[removeIndex]==array[arrayIndex]){
                add = false;
            }
        }

        if(add == true){
            newArray.push(array[arrayIndex]);
        } else {
            add = true;
        }
    }

    return newArray;

}

module.exports = removeFromArray
