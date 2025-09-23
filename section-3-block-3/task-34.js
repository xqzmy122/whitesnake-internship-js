Array.prototype.square = function() {
  return this.map((el) => {
    return el * el
  })
}

Array.prototype.cube = function() {
  return this.map((el) => {
    return el * el * el
  })
}

Array.prototype.average = function() {
  return (this.reduce((acc, el) => {
    return acc += el
  }, 0) / this.length)
}

Array.prototype.sum = function() {
  return this.reduce((acc, el) => {
    return acc += el
  }, 0)
}

Array.prototype.even = function() {
  return this.filter((el) => el % 2 === 0)
}

Array.prototype.odd = function() {
  return this.filter((el) => el % 2 !== 0)
}

var numbers = [1, 2, 3, 4, 5];

console.log(numbers.square()); // must return [1, 4, 9, 16, 25]
console.log(numbers.cube());  // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum());    // must return 15
console.log(numbers.even());  // must return [2, 4]
console.log(numbers.odd()); // must return [1, 3, 5]