var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var results2 = [];

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];
function findItemsOver20(itemLists) {
  var newArr = [];
  for (let i=0; i<itemLists.length; i++) {
    var items = itemLists[i];
    if(items.qty > 20){
      newArr.push(items);
    }
  }
  return newArr;
}
console.log(findItemsOver20(itemList));

function findItemsOver(itemList, threshold) {
  var newArr = [];
  for (let i=0; i < itemList.length; i++) {
    var items = itemList[i];
    if (items.qty > threshold) {
      newArr.push(items);
    }
  }
  return newArr;
}
console.log(findItemsOver(itemList3, 20));