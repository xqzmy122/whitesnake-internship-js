function getFibobacciNumber(n) {
  let res = 0
  if(n === 1 || n === 2) {
    return 1
  }

  res = getFibobacciNumber(n-1) + getFibobacciNumber(n-2)
  return res
}

console.log(getFibobacciNumber(10));