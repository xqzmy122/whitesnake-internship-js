function deepFreeze(obj, seen =  new WeakSet()) {
  if(obj === null || typeof obj !== "object" || seen.has(obj)) return obj

  seen.add(obj)

  Object.getOwnPropertyNames(obj).forEach((prop) => deepFreeze(obj[prop], seen))
  Object.getOwnPropertySymbols(obj).forEach((prop) => deepFreeze(obj[prop], seen))

  return Object.freeze(obj)
}

function makeImmutable(obj) {
  if(obj === null || typeof obj !== "object") return obj

  const clone = Array.isArray(obj) ? [...obj] : {...obj}

  return deepFreeze(clone)
}