function cutFirstAndLast(str) {
  if(typeof str !== "string") return null

  const array = str.split(",")

  if (array.length <= 2) return null

  return array.map((el, i) => {
    if(i !== 0 && i !== array.length - 1) {
      return el
    }
  }).join(" ") 
}