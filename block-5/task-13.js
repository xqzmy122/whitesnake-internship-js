function countValues(obj) {
  const newObj = {}

  const values = Object.values(obj)
  
  for(let i = 0; i < values.length; ++i) {

    if(newObj[values[i]] !== undefined) {
      newObj[values[i]] = newObj[values[i]] + 1
      continue
    }

    newObj[values[i]] = 1 
  }

  return newObj
}