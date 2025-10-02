function getStringFromArray(str) {
  return str.join()
}

console.log(getStringFromArray([true, "1w3", [1,2,3]]));

// Вывод должен быть в виде true, 1w3, 1,2,3 или true, 1w3, [1,2,3]?