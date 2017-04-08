// There are N children standing in a line. Each child is assigned a rating value.
//
// You are giving candies to these children subjected to the following requirements:
//
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

// ratings:     [5, 6, 2, 2, 4, 8, 9, 5, 4, 0, 5, 1]
// candies:     [1, 2, 1, 1, 2, 3, 4, 3, 2, 1, 2, 1]
// 23 candies

function minCandy(array) {
  // start with an array of 1's
  let pieces = Array.from({length: array.length}, () => 1);
  // two loops
  // check if neighbor is greater tha, if we are in a hill
  // if we are in a 'hill' then each subquential item is hill + 1
  let hill;
  for (let i = 1; i < array.length; i++) {
    if (array[i-1] < array[i]) {
      hill = pieces[i-1];
      pieces[i] = hill + 1;
    }
  }
  console.log(pieces);

  for (let j = array.length-1; j > 0; j--) {
    if (array[j-1] > array[j] && pieces[j-1] <= pieces[j]) {
      hill = pieces[j];
      pieces[j-1] = hill + 1;
    }
  }
  console.log(pieces)

  return pieces.reduce((a,b) => a + b);
}


// let ratings = [2,1];
let ratings = [4,2,3,4,1]
//            [2,1,2,3,1]
// let ratings = [ 5, 6, 2, 2, 4, 8, 9, 5, 4, 0, 5, 1 ];
// first pass [ 1, 2, 1, 1, 2, 3, 4, 1, 1, 1, 2, 1 ]
// let candies = [1, 2, 1, 1, 2, 3, 4, 3, 2, 1, 2, 1];
//              [ 1, 2, 1, 1, 2, 3, 4, 3, 2, 1, 2, 1 ]

console.log(minCandy(ratings));
