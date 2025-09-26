/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortOddNumbers(array) {
  if (!Array.isArray(array)) throw new Error("Argument must be an array");

  const res = [];

  for (let i = 0; i < array.length; ++i) {
    if (array[i] % 2 !== 0) res.push(array[i]);
  }

  for (let i = res.length; i > 0; --i) {
    for (let j = 1; j < i; ++j) {
      if (res[j - 1] > res[j]) {
        let temp = res[j - 1];
        res[j - 1] = res[j];
        res[j] = temp;
      }
    }
  }

  for(let i = 0; i < array.length; ++i) {
    if(array[i] % 2 === 0) res.splice(i, 0, array[i])
  }

  return res;
}

console.log(sortOddNumbers([1, 2, 3, 7, 4, 5]));
