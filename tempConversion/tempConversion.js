const ftoc = function(temp) {
  let newTemp = 0;
  newTemp = (temp-32)*5/9;

  newTemp = Math.round(newTemp*10)/10;

  return newTemp;
}

const ctof = function(temp) {
  let newTemp = 0;
  newTemp = temp*9/5+32;

  newTemp = Math.round(newTemp*10)/10;

  return newTemp;
}

module.exports = {
  ftoc,
  ctof
}
