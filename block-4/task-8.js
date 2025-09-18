function removeProperties(obj, key) {
  const newObj = {...obj}

  key.forEach((prop) => {
    delete newObj[prop]
  })

  return newObj
}