function cache(fn) {
  const results = new Map();
  let previousArguments;

  return (...args) => {
    if (args instanceof Object) {
      if (areTwoObjectsEqual(args, previousArguments)) {
        console.log("returned cashe");
        return results.get(previousArguments);
      } else {
        const currentRes = fn(...args);
        previousArguments = args;
        results.set(previousArguments, currentRes);
        return currentRes;
      }
    }
  };
}

function areTwoObjectsEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (obj1 instanceof Array && obj2 instanceof Array) {
    if (obj1.length !== obj2.length) return false;

    for (const key of obj1) {
      const res =  typeof key === "object" ? !areTwoObjectsEqual(obj1[key], obj2[key]) : !obj2.includes(key)
      if (
        res
      )
        return false;
    }
  } else {
    if (keys1.length !== keys2.length) return false;

    for (const key of obj1) {
      if (!obj2.includes(key) || !areTwoObjectsEqual(obj1[key], obj2[key]))
        return false;
    }
  }

  return true;
}

const fn = (x, y) => {
  return x.name + y.name
};

const newFn = cache(fn);
console.log(newFn({name: 123}, {name: 456}));
console.log(newFn({name: 123}, {name: 456}));
