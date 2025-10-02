function map(arr, callbackFn) {
  if(!Array.isArray(arr) || typeof callbackFn !== "function") throw new Error("Arguments must be an array and a function")
  const newArr = []

  for(let i = 0; i < arr.length; ++i) {
    if(i in arr) {
      newArr[i] = callbackFn(arr[i], i, arr)
    }
  }

  return newArr
}

const arr = [1, , 2, 4]
console.log(map(arr, (el, index, arr) => el * 2));
