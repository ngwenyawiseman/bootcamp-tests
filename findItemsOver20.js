function findItemsOver20(itemList) {
  return itemList.filter(item => item.qty > 20);
}

function findItemsOver(itemList, threshold) {
  return itemList.filter(item => item.qty > threshold);
}

var itemList = [
  {name: 'apples', qty: 10},
  {name: 'pears', qty: 37},
  {name: 'bananas', qty: 27},
  {name: 'apples', qty: 3},
];

var results = findItemsOver20(itemList);
console.log(results);

var results2 = findItemsOver(itemList, 25);
console.log(results2);