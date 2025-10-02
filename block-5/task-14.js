function prefill(n, value) {
  if(value === undefined) return Array(n).fill(undefined);
  if(n === 0) return []

  if(n >= 0) {
    return Array(n).fill(value)
  } else {
    throw new Error(`${n} is invalid`)
  }
}
