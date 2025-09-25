function flat(arr, deepth = 1) {
  let res = [];

  if (deepth === 0) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; ++i) {
      if (Array.isArray(arr[i])) {
        res = res.concat(flat(arr[i], deepth - 1));
        continue
      }

      res.push(arr[i])
    }
  }

  return res;
}
