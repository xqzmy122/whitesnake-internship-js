function countValues(obj) {
  const newObj = Object.create(null)

  const values = Object.values(obj)
  
  for(let i = 0; i < values.length; ++i) {

    if(newObj[JSON.stringify(values[i])] !== undefined) {
      newObj[JSON.stringify(values[i])] = newObj[JSON.stringify(values[i])] + 1
      continue
    }

    newObj[JSON.stringify(values[i])] = 1 
  }

  return newObj
}

console.log(countValues({
  name: 2,
  age: NaN,
  parents: undefined,
  year: NaN
}));