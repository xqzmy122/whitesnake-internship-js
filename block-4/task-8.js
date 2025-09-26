function removeProperties(obj, keys) {
  if(typeof obj !== "object" || obj === null) throw new Error("First argument must be an object")
  if(!Array.isArray(keys)) throw new Error("Second argument must be an array")
  const result = {}
  const keysToRemove = new Set(keys)

  for(const k of Object.keys(obj)) {
    if(!keysToRemove.has(k)) {
      result[k] = obj[k]
    }
  }

  return result
}