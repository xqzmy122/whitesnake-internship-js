function getFloatOnString(str) {
  const value = parseFloat(str)
  return (value ? value : NaN)
}
