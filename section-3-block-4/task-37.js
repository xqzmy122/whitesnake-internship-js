Object.prototype.hash = function(str) {
  const path = str.split(".")
  let currentObj = this
  
  for(let i = 0; i < path.length; ++i) {
    if(!currentObj[path[i]]) return undefined
    currentObj = currentObj[path[i]] 
  }

  return currentObj
}

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined
