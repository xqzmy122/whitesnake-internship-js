function getFibobacciNumber(n) {
  if(n <= 2) {
    return 1
  }

  return getFibobacciNumber(n-1) + getFibobacciNumber(n-2)
}

console.log(getFibobacciNumber(10));