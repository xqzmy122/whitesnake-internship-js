let santa = {
  sayHoHoHo: function () {
    console.log("Ho Ho Ho!");
  },
  distributeGifts: function () {
    console.log("Gifts for all!");
  },
  goDownTheChimney: function () {
    console.log("*whoosh*");
  },
};

let notSanta = {
  sayHoHoHo: function () {
    console.log("Oink Oink!");
  },

  // no distributeGifts() and no goDownTheChimney()
};

function isSantaClausable(obj) {
  const methodsToCheck = [
    ["sayHoHoHo", "say_ho_ho_ho"],
    ["distributeGifts", "distribute_gifts"],
    ["goDownTheChimney", "go_down_the_chimney"],
  ];

  const keys = Object.keys(obj);

  for (const [m1, m2] of methodsToCheck) {
    if (typeof obj[m1] === "function" || typeof obj[m2] === "function") {
      continue;

    }
    return false;
  }

  return true;
}

console.log(isSantaClausable(santa));
