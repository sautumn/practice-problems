// Examples: If array is [2, 3, 10, 6, 4, 8, 1] then returned value should be 8
// (Diff between 10 and 2). If array is [ 7, 9, 5, 6, 3, 2 ] then returned value
// should be 2 (Diff between 7 and 9)

function maxDifference(array){
  let diff = -Infinity;
  let min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i-1] < min ) {
      min = array[i-1];
    }
    // now we need to check the diffs
    let currentDiff = array[i] -  min;
    if (currentDiff > diff) {
      diff = currentDiff;
    }
  }
  return diff;
}

console.log(maxDifference([ 7, 9, 5, 6, 3, 2 ]));
