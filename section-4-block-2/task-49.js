/*
Summary of requirements:
Cat constructor, requiring arguments for name and weight
Throw an error if name or weight not specified when invoking the constructor.
Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
Must use Object.defineProperty
*/

const Cat = (function() {
  let counter = 0;
  let totalWeight = 0;

  return class Cat {
    constructor(name, weight) {
      if (!name || !weight) throw new Error("Cat must have name and weight");

      counter += 1;
      totalWeight += weight;
      this.name = name;
      this._weight = weight;

      Object.defineProperty(this, "weight", {
        get() {
          return this._weight;
        },
        set(newWeight) {
          if(typeof newWeight !== "number") throw new Error("Cat's weight must be number") 
          if(newWeight < 0) throw new Error("Cat's weight must be positive number")
          totalWeight = totalWeight - this._weight + newWeight;
          this._weight = newWeight;
        },
      });
    }

    static averageWeight() {
      return totalWeight / counter;
    }
  };
})();

const cat = new Cat("Miron", 100);
const cat2 = new Cat("Alexander Makedonskiy", 20);
cat.weight = 120;
console.log(cat.weight);
console.log(Cat.averageWeight());
