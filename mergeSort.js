function mergeArrays(array1, array2){
  let result = [];
  let index1 = 0;
  let index2 = 0;
  let currentArray1 = array1[index1];
  let currentArray2 = array2[index2];

  while (result.length <= array2.length + array2.length) {
    if(currentArray1 === undefined) {
      if (currentArray2 === undefined) { break;}
      result.push(currentArray2);
      index2++
      currentArray2 = array2[index2];
    } else if (currentArray2 === undefined) {
      if (currentArray1 === undefined) { break;}
      result.push(currentArray1);
      index1++
      currentArray1 = array1[index1];
    } else if (currentArray2 > currentArray1){
      result.push(currentArray1);
      index1++
      currentArray1 = array1[index1];
    } else if (currentArray2 < currentArray1) {
      result.push(currentArray2);
      index2++
      currentArray2 = array2[index2];
    }
  }
  return result;
}

function splittingArrays(array, sortedArray) {
  if (!sortedArray){
    sortedArray = [];
  }
  if (array.length === 1){
    sortedArray.push(array);
    return sortedArray;
  }
  if(array.length === 2) {
    sortedArray.push([
      Math.min(array[0], array[1]),
      Math.max(array[0], array[1])
    ]);
    return sortedArray;
  }

  const half = Math.floor(array.length-1 / 2);
  let firstHalf = array.splice(0,half-1);
  let secondHalf = array;
  splittingArrays(firstHalf, sortedArray);
  splittingArrays(secondHalf, sortedArray);
  return sortedArray;
}

function mergeSort(inputarray){
  const array = splittingArrays(inputarray)
  return array.reduce((a,b) => {
    return mergeArrays(a,b);
  })
  // return array;
}



console.log('result: ',mergeSort([1,8,3,0,2,5,-1]));
//[0,1,2,3,4,5,7,10]



// console.log(mergeArrays([1,3,8,10],[2,4,6,5]));
