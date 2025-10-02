function partial(fn, ...args) {
  return (...args2) => {
    return fn(...args, ...args2)
  }
}

function sum(a, b, c, d) {
  return a + b + c + d
}

const addFive = partial(sum, 3)