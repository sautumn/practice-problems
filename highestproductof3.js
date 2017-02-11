// Given an arrayOfInts, find the highestProduct
// you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

const highestProductof3 = (array) => {
  //base case of only 3
  if (array.length === 3 ) {
    return array.reduce((n,m) => (n*m));
  }
  //could sort but would take O(n lg n) time
  //can do O(n) using greedy approach


};

console.log(highestProductof3([2,3,4])) //should be 12;
