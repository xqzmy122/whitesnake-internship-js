function ifElse(condition, thenFn, elseFn) {
  if(!(thenFn instanceof Function) && !(elseFn instanceof Function)) throw new Error("Wrong arguments, both should be functions")
  switch (Boolean(condition)) {
    case true:
      return thenFn()
    break;
    case false: 
      return elseFn()
  }
}