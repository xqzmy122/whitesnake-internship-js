const rent = 40
const discountForThreeDays = 20
const discountForSevenDays = 50

function calculateDiscount(days) {
  const money = days * rent

  if(days < 0) return "Incorrect value"

  if(days < 3) {
    return money
  } else if (days >= 3 && days < 7) {
    return money - discountForThreeDays
  } else {
    return money - discountForSevenDays
  }
}