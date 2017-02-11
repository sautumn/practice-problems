// Write a function getProductsOfAllIntsExceptAtIndex()
// that takes an array of integers and returns an array of the products.
//
// For example, given:
//
//   [1, 7, 3, 4]
//
// your function would return:
//
//   [84, 12, 28, 21]
//
// by calculating:
//
//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]
//
// Do not use division in your solution.

const input = [1, 7, 3, 4];
const input2 = [1, 1, 1, 1, 1];
const input3 = [1, 2, 0, 1, 1];

// naive solution
const productOfAllIntsExpectAtIndex = (array) => {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    //set curr array value to 1
    let temp = array[i];
    array[i] = 1;
    result.push(array.reduce((a,b)=>a*b));
    array[i] = temp;
  }
  // console.log(result);
  return result;
};

// better solution using a greedy approach
const productOfAllIntsExpectAtIndex2 = (array) => {
  let nextProduct = 1;
  let prevProduct = 1;
  let result = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== 0){
      prevProduct *= array[i-1];
      result.push(prevProduct);
    } else {
      result.push(prevProduct);
    }
  }
  return result;
};

console.log(productOfAllIntsExpectAtIndex2([1, 7, 3, 4]));

const assert = (condition, expected, errorMessage) => {
  return condition === expected ? console.log('Test passed') : console.log(errorMessage);
};

// naive solution tests
// assert(JSON.stringify(productOfAllIntsExpectAtIndex(input)), JSON.stringify([84, 12, 28, 21]), 'Should multiple all except current index');
// assert(JSON.stringify(productOfAllIntsExpectAtIndex(input2)), JSON.stringify([1, 1, 1, 1, 1]), 'Should multiple all except current index');
// assert(JSON.stringify(productOfAllIntsExpectAtIndex(input3)), JSON.stringify([0, 0, 2, 0, 0]), 'Should multiple all except current index');
