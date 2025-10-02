function promiseAll(array) {
  if(array.length === 0) return new Promise((res) => res([])
  )
  return new Promise((resolve, reject) => {
    const results = []
    let counter = 0

    array.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        results[index] = value
        counter++

        if (counter === array.length) resolve(results)
      }).catch((error) => {
        reject(error)
      })
    })
  })
}

const promise1 = new Promise((res) => {
  setTimeout(() => {
    res(1)
  }, 2000)
})

const promise2 = new Promise((res) => {
  setTimeout(() => {
    res(10)
  }, 1000)
})

promiseAll([promise1, promise2]).then((data) => data).catch((err) => err)

