function delayPromise(delay, value) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(value)
    }, delay)
  })
}

delayPromise(1000, 10).then((data) => console.log(data))

