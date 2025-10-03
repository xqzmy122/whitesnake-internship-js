/*
  In testing, a spy function is one that keeps track of various metadata regarding its invocations. 
Some examples of properties that a spy might track include:

Whether it was invoked
How many times it was invoked
What arguments it was called with
What contexts it was called in
What values it returned
Whether it threw an error
For this kata, implement a spyOn function which takes any function func as a parameter and returns a spy for func. 
The returned spy must be callable in the same manner as the original func, and include the following additional properties/methods:

.callCount() — returns the number of times spy has been called
.wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
.returned(val) — returns true if spy ever returned val, else returns false
Below is a specific example of how spyOn might work in the wild.

function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );

adderSpy(2, 4); // returns 6
adderSpy(3, 5); // returns 8
adderSpy.callCount(); // returns 2
adderSpy.wasCalledWith(4); // true
adderSpy.wasCalledWith(0); // false
adderSpy.returned(8); // true
adderSpy.returned(0); // false
*/

function spyOn(fn) {
  let counter = 0;
  const parameters = new Set();
  const returnedValues = new Set();

  function spy(...args) {
    counter++;
    parameters.add(args);
    const result = fn(...args);
    returnedValues.add(result);

    return result;
  }

  spy.callCount = () => counter;

  spy.wasCalled = (...args) => {
    for (const parameter of parameters) {
      if (areTwoObjectsEqual(parameter, args)) {
        return true;
      }
    }

    return false;
  };

  spy.returned = (args) => {
    for (const value of returnedValues) {
      if (areTwoObjectsEqual(value, args)) {
        return true;
      }
    }

    return false;
  };

  return spy;
}

function adder(n1, n2) {
  return n1 + n2;
}

const adderSpy = spyOn(adder);
adderSpy(2, 3);
adderSpy(2, 3);
console.log(adderSpy.callCount());
console.log(adderSpy.wasCalled(2, 9));
console.log(adderSpy.returned(5));

function areTwoObjectsEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (obj1 instanceof Array && obj2 instanceof Array) {
    if (obj1.length !== obj2.length) return false;

    for (const key of obj1) {
      const res =
        typeof key === "object"
          ? !areTwoObjectsEqual(obj1[key], obj2[key])
          : !obj2.includes(key);
      if (res) return false;
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
