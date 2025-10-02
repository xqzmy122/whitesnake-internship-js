function flattenTree(tree) {
  let res = []
  res.push(tree.value)

  if(tree.children.length !== 0) {
    for(let i = 0; i < tree.children.length; ++i) {
      res = res.concat(flattenTree(tree.children[i]))
    }
  } 

  return res
}

const tree = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { 
      value: 3, 
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] }
      ] 
    }
  ]
};

console.log(flattenTree(tree));