Function.prototype.myBind = function (context, ...args) {
  return () => this.call(context, args)
}

function greet(message) {
  console.log(this.name + ' says: ' + message);
}

const person = { name: 'Alice' };
const boundGreet = greet.myBind(person, 'Hello');
boundGreet() // Output: Alice says: Hello