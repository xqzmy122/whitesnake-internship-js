function createFunctions(amount) {
  const arrayOfFunctions = []

  for(let i = 0; i < amount; ++i) {
    arrayOfFunctions.push(() => i)
  }

  return arrayOfFunctions
}