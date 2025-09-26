/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

function isValid(str) {
  if(str.length === 0 || str.length > 104) throw new Error("String must consist of 1-104 elements")

  const stack = []

  const brackets = {
    "[": "]",
    "{": "}",
    "(": ")"
  }

  const keys = Object.keys(brackets)

  for(const symb of str) {
    if(keys.includes(symb)) {
      stack.push(symb)
      continue
    }
    
    if(symb === brackets[stack[stack.length-1]]) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length ? false : true
}

console.log(isValid("{{[(]}}"));