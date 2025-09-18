function map(arr, callbackFn) {
  const newArr = []

  for(let i = 0; i < arr.length; ++i) {
    newArr.push(callbackFn(arr[i]))
  }

  return newArr
}

console.log(map([1, 2, 4], (el) => el * 2));
