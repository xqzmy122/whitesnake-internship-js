function findTwoIndices(array, target) {
  const hash = {}

  for(let i = 0; i < array.length; ++i) {
    const value = target - array[i]

    if(hash[value] !== undefined) {
      return [hash[value], i]
    }

    hash[array[i]] = i
  }

  return "No matches"
}