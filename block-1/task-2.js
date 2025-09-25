function calculate(operation, value1, value2) {
  if(typeof value1 !== "number" || typeof value2 !== "number" || typeof operation !== "string") return null
  switch (operation) {
    case "+":
      return value1 + value2
    case "-":
      return value1 - value2
    case "*":
      return value1 * value2
    case "/":
      return value1 / value2
    default:
      throw new Error("Unknown operation")
  }
}