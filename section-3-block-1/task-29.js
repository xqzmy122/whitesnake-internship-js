function partial(fn, ...args) {
  return (...args2) => {
    if(args2.length + args.length === fn.length) {
      return fn(...args, ...args2)
    } else {
      return "Wrong number of arguments"
    }
  }
}

function sum(a, b, c, d) {
  return a + b + c + d
}

const addFive = partial(sum, 3)