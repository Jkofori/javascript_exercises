function add (x,y) {
	return x+y;
}

function subtract (x,y) {
	return x-y;
}

function sum (x) {
	return x.reduce((total, a) => {return total+a;},0);
}

function multiply (x) {
	return x.reduce((total, a) => {return total*a;},1);
}

function power(x,y) {
	return Math.pow(x,y);
}

function factorial(x) {
	if(x==1 || x==0){
		return 1;
	} else {
		let factorial = 1;
		for(let count=1;count<=x;count++){
			factorial=factorial*count;
		}
		return factorial;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}