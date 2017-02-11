// Given an arrayOfInts, find the highestProduct
// you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

const highestProductOfThree= (array) => {
  //base case not 3
  if (array.length < 3 ) {
    return null;
  }
  //base case of only 3
  if (array.length === 3 ) {
    return array.reduce((n,m) => (n*m));
  }
  //could sort but would take O(n lg n) time
  //can do O(n) using greedy approach

  let productOf2 = {
    lowest: null,
    highest: null,
  };

  let highestProductOf3 = null;
  let lowestNum = null;
  let highestNum = null;

  for (let i = 1, length = array.length; i < length; i++) {
    if (array[i] < lowestNum || lowestNum === null) {
      lowestNum = array[i];
    }
    if (array[i] > highestNum || highestNum === null) {
      highestNum = array[i];
    }
    if (i >= 2) {
      let currProductOf2 = array[i-1] * array[i];
      if (currProductOf2 > productOf2.highest || productOf2.highest === null){
        productOf2.highest = currProductOf2;
      }
      if (currProductOf2 < productOf2.lowest || productOf2.lowest === null){
        productOf2.lowest = currProductOf2;
      }

      // TODO: finish greedy algorithm


    }
  }

};

console.log(highestProductofThree([2,3,4])); //should be 12;
