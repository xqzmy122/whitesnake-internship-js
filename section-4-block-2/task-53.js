/*
Реализуй функцию invert(obj), которая меняет местами ключи и значения. 
Если значения повторяются, сохранить массив ключей:
invert({ a: 1, b: 2, c: 1 }) // → { 1: ['a','c'], 2: ['b'] }
*/

function invert(obj) {
  if(typeof obj !== "object") throw new Error("Argument must be object")
  
  const res = {}

  Object.entries(obj).forEach((arr) => {
    if(res[arr[1]]) {
      res[arr[1]].push(arr[0])
      return
    }
    res[arr[1]] = new Array(arr[0])
  })

  return res
}

console.log(invert({ a: 1, b: 2, c: 1 }));