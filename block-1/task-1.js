function hasCorrectNumber(str) {
  if(str.length === 0) return false
  
  return isNaN(Number(str)) ? false : true
}

console.log(hasCorrectNumber("0.0"));