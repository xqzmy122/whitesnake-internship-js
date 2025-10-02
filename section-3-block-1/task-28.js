function sum(...args) {
  return (...args2) => {
    if(args2.length === 0) {
      return args.reduce((acc, el) => {
        return acc += el
      }, 0)
    }
    return sum(...args, ...args2)
  }
}

console.log(sum(2)(0)());



