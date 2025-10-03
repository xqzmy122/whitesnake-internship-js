/*
Реализуйте функцию deepClone(obj), которая создаёт глубокую копию переданного объекта. 
Копия не должна иметь общих ссылок с оригиналом (кроме примитивов)
*/

function deepClone(obj, map = new WeakSet()) {
  if (obj === null || typeof obj !== "object") return obj;

  if(map.has(obj)) return map.get(obj)

  if (Array.isArray(obj)) {
    const newArray = []

    for(const value of obj) {
      newArray.push(deepClone(value))
    }

    map.add(obj, newArray)
    return newArray
  } else {
    const newObj = {}

    for(const key in obj) {
      newObj[key] = deepClone(obj[key])
    }

    map.add(obj, newObj)
    return newObj
  }
}