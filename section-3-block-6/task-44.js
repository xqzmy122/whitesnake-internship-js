/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/

function reverseString(arr) {
  if(arr.length === 0 || arr.length > 105) throw new Error("Array must be 1 - 105 elements")

  let left = 0
  let right = arr.length - 1

  for(; left < right; ++left, --right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
  }

  return arr
}

console.log(reverseString(["H","a","n","n","a","h"]));
console.log(reverseString(["h","e","l","l","o"]));