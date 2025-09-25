function filterStrings(arr) {
  return arr.filter((el) => {
    return (typeof el === "string")
  })
}