function cutFirstAndLast(str) {
  if (str.length <= 2) return null

  return str.substring(2, str.length - 2).replace(/,/g, " ")
}