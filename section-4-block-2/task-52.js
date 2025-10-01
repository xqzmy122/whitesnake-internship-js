const digits = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const functions = {};

const operations = {
  minus: (number) => {
    return { operation: "minus", rightValue: number };
  },
  plus: (number) => {
    return { operation: "plus", rightValue: number };
  },
  dividedBy: (number) => {
    return { operation: "division", rightValue: number };
  },
  times: (number) => {
    return { operation: "times", rightValue: number };
  },
};

for (const prop in digits) {
  functions[prop] = (operationFunction) => {
    if (operationFunction) {
      const {operation, rightValue} = operationFunction
      switch (operation) {
        case "minus":
          return digits[prop] - rightValue;
        case "plus":
          return digits[prop] + rightValue;
        case "division":
          return Math.floor(digits[prop] / rightValue);
        case "times":
          return digits[prop] * rightValue;
        default:
          break;
      }
    } else {
      return digits[prop];
    }
  };
}

const nine = functions.nine
const two = functions.two
const dividedBy = operations.dividedBy

console.log(nine(dividedBy(two())));
