function bubbleSort(array) {
  console.log(array);
  let sorted = false;

  while(!sorted) {
    for (var i = 0; i < array.length; i++) {
      sorted = true;
      for (var j = 1; j < array.length; j++) {
        if (array[j-1] > array[j]) {
          let temp = array[j-1];
          array[j-1] = array[j];
          array[j] = temp;
          console.log(array);
          sorted = false;
        }
      }
    }
    // console.log(swaps)
    return array;
  }
}

console.log(bubbleSort([3,2,1,80,1]));
