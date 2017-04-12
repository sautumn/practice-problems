
// brute force
function twoSum(array, target) {
  let indexes = [];
  for (var i = 0; i < array.length; i++) {
    let current = array[i];
    let currentIndex = i;
    for (var j = i+1; j < array.length; j++) {
      //next item after our current
      if(current + array[j] === target) {
        indexes.push(currentIndex);
        indexes.push(j);
        return indexes;
      }
    }
  }
}

// console.log(twoSum([3,2,4], 6));

function twoSum(array, target) {
  let visited = {};
  let indexes = [];
  for (var i = 1; i < array.length; i++) {
    // first check our previously visited values
    for (let key in visited) {
      if (visited[key] + array[i] === target) {
        indexes.push(key);
        indexes.push(i);
        return indexes;
      }
    }
    if (array[i-1] + array[i] ===  target) {
      indexes.push(i-1);
      indexes.push(i);
      return indexes;
    } else {
      // Add to previously visited
      visited[i-1] = array[i-1];
    }
  }
  return indexes;
}

console.log(twoSum([3,2,4], 6));


function twoSumPartTWO(array, sum){
  for (var i = 0; i < array.length; i++) {
    for (var j = i+1; j < array.length; j++) {
      if (array[i]+array[j] === sum){
        return [i,j];
      }
    }
  }
  return false;
}

console.log(twoSumPartTWO([3,2,4,1,3],4))

// complement is the current element minus the target

function twoSumPartThree(array, target) {
  let letters = {};

  for (var i = 0; i < array.length; i++) {
    if (!letters[array[i]]){
      letters[array[i]] = i;
    }
  }

  for (var i = 0; i < array.length; i++) {
    let remaining = target - array[i];
    if (letters[remaining] && letters[remaining] !== target) {
      return [i, letters[remaining]];
    }
  }
  return false;
}

console.log(twoSumPartThree([3,2,4,1,3],4))
