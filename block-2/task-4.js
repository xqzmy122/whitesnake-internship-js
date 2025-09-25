const rent = 40
const discountForThreeDays = 20
const discountForSevenDays = 50

function calculateDiscount(days) {
  if(days < 0) throw new Error("Incorrect value")
  const money = days * rent

  if(days >= 7 ) return money - discountForSevenDays
  if(days >= 3) return money - discountForThreeDays

  return money
}

console.log(calculateDiscount(10));