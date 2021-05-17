let findTheOldest = function(array) {
    let ageArray = array.map((element,index) => 
        ({age: getAge(element),name: array[index].name}));
    
    ageArray.sort((a,b)=> (a.age<b.age)?1:-1);

    return ageArray[0];
}

function getAge(element){
    if(element.yearOfDeath==undefined){
        let d = new Date();
        return (d.getFullYear()-element.yearOfBirth);
    }
    return element.yearOfDeath-element.yearOfBirth;
}

module.exports = findTheOldest
