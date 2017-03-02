// pascals nums
// dynammic programming approach
// bottom down using memo
const generate = (numRows) => {
  // handle 0th case
  if (numRows === 0) {
    return [];
  }

  // store the first two cases
  const memo = {
    0: [1],
    1: [1,1],
  };

  const pascalRows = [];

  for (let i = 0; i < numRows; i++) {
    // if its not undefined in the memo
    if (memo[i]) {
      pascalRows.push(memo[i]);
    } else {
      // if we havent already memoized it
      // we already have the first two
      // so we should have the prev one
      let prevRow = memo[i-1];
      // we always start with 1 and end with 1
      // add the two adjacent nums
      let currRow = [1];
      // start at second element so we avoid exceeding array bounds
      // do this for all values in the array
      for (let i = 1; i < prevRow.length; i++) {
        let adjSum = prevRow[i-1] + prevRow[i];
        currRow.push(adjSum);
      }
      // after we run through the adj sums, add one again
      currRow.push(1);
      // now we need to store it so we can use it later
      memo[i] = currRow;
      pascalRows.push(currRow);
    }
  }
  console.log(pascalRows);
  return pascalRows;
};

const assert = (condition1, condition2, errorMessage) => {
  if (condition1 === condition2) {
    console.log('Test passed.');
  } else {
    console.log(errorMessage);
  }
};

let pascalsTriangle5= [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];
// stringify to lazily compare the two arrays
assert(JSON.stringify(generate(0)), JSON.stringify(pascalsTriangle5), 'Should print out array of 5 rows');
