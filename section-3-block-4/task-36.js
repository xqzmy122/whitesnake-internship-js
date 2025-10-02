function Person (name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function(){
  return 'My name is ' + this.name + ' and I am ' + this.age;
};

var john = new Person('John', 30);
var jack = new Person('Jack', 40);

function ReturnsArray (name) {
  this.name = name;
  return [1, 2, 3];
}

function nouveau(constructor, ...args) {
  const newObj = Object.create(constructor.prototype)
  
  return constructor.apply(newObj, args) || newObj
}

const example = nouveau(ReturnsArray, "Jhon")
console.log(example);
