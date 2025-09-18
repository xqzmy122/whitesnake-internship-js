function ifElse(condition, thenFn, elseFn) {
  switch (Boolean(condition)) {
    case true:
      thenFn()
    break;
    case false: 
      elseFn()
  }
}