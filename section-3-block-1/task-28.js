function sum(...args) {
  return (x) => {
    if(!x) {
      return args.reduce((acc, el) => {
        return acc += el
      }, 0)
    }
    return sum(...args, x)
  }
}


