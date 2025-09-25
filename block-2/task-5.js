function findTwoIndices(array, target) {
  const hash = new Map()

  for(let i = 0; i < array.length; ++i) {
    const value = target - array[i]

    if(hash.has(value)) {
      return [hash.get(value), i]
    }

    hash.set(array[i], i)
  }

  return "No matches"
}

