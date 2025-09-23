class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  legs = 0
  species = "shark"
  constructor(name, age, status) {
    super(name, age, status);
  }
}

class Cat extends Animal {
  leg = 4
  species = "cat"

  constructor(name, age, status) {
    super(name, age, status);
  }

  introduce() {
    return `${super.introduce()}  Meow meow!`
  }
}

class Dog extends Animal {
  legs = 4
  species = "dog"
  constructor(name, age, status, master) {
    super(name, age, status)
    this.master = master
  }

  greedMaster() {
    return `Hello ${this.master}`
  }
}

