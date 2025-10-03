/*
Digital root is the recursive sum of all the digits in a number.
https://en.wikipedia.org/wiki/Digital_root

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digitsSum(n) {
  if(typeof n !== "number") return "Arguments must be a number"
  if(n < 0) return "Argument must be non-negative"
  if (n < 10) return n

  const res = n.toString().split("").map(Number).reduce((acc, el) => {
    return acc += el
  }, 0)
  
  return digitsSum(res)
}

console.log(digitsSum(493193));
