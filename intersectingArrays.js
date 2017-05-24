const intersectingArrays = (array1, array2) => {
  const items = {};

  function addToItems(array){
    for (var i = 0; i < array.length; i++) {
      if (!items[array[i]]) {
        items[array[i]] = {
          indexTotal: i,
          foundInBoth: false,
        };
      } else {
        items[array[i]].indexTotal += i;
        items[array[i]].foundInBoth = true;
      }
    }
  }

  addToItems(array1);
  addToItems(array2);

  let minIndex = Infinity;
  let occuringItem = null;

  for (let key in items) {
    if (items[key].foundInBoth){
      if (items[key].indexTotal < minIndex) {
        minIndex = items[key].indexTotal;
        occuringItem = key;
      }
    }
  }
  if (!occuringItem) {
    return 'yelpwhich';
  } else {
    return occuringItem;
  }
}

console.log(intersectingArrays([1,2,3,4],[0,2,100,5]));
