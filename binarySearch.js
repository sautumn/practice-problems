// binary search works best on already sorted items

function binarySearch(target, array, range) {
  // if our array only has one item in it
  if (array.length === 1) {
    return `Array only has one item`;
  }
  let midIndex, midItem;
  // if we are n our first iteration
  if (!range) {
    midIndex = Math.floor((array.length) / 2);
    midItem = array[midIndex];
  } else {
    midIndex = Math.floor((range[1] - range[0]) / 2) + range[0];
    midItem = array[midIndex];
  }
  // if we have reached the end or the beginning of the array
  if (midIndex === 0 || midIndex === array.length-1){
    return `${target} not found in array`;
  }
  // see if we found our item
  if (midItem === target) {
    return `Item found at index ${midIndex}`;
  } else {
    console.log(array);
    // decide which half to explore
    if (target < midItem) {
      console.log(`${target} is < than ${midItem}`);
      // explore right side - larger items
      return binarySearch(target, array, [-1,midIndex]);
    } else {
      // explore left side - smaller items
      console.log(`${target} is > than ${midItem}`);
      return binarySearch(target, array, [midIndex, array.length]);
    }
  }
}

console.log(binarySearch(2,[0,1,3,4,5]));
