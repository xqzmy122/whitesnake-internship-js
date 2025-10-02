function getMiddleCharacter(str) {
  if(typeof str !== "string" || str.length === 0) throw new Error("Invalid argument, must be non-empty string") 
  const midLength = Math.floor(str.length / 2)

  if(str.length % 2 === 0) {
    return (str.substring(midLength - 1, midLength + 1))
  } else {
    return str.charAt(midLength)
  }
}

