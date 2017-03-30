
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
