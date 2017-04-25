function mergeArray(array1, array2) {
  //return merged array
  let mergedArray = [];
  let array1Index = 0;
  let array2Index = 0;
  let mergedArrayIndex = 0;

  while(mergedArrayIndex < (array1.length + array2.length)) {
    if (array1Index >= array1.length) {
      mergedArray.push(array2[array2Index]);
      array2Index++;
    } else if (array2Index >= array2.length){
      mergedArray.push(array1[array1Index]);
      array1Index++;
    } else if (array1[array1Index] > array2[array2Index]) {
      mergedArray.push(array2[array2Index]);
      array2Index++;
    } else if (array1[array1Index] < array2[array2Index]) {
      mergedArray.push(array1[array1Index]);
      array1Index++;
    }
    mergedArrayIndex++
  }
  return mergedArray;
}

console.log(mergeArray([1,4,6,8],[2,3,5,7,9]))
