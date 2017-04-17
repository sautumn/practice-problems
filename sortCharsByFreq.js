// Given a string, sort it in decreasing order based on the frequency of characters.
//
// Example 1:
//
// Input:
// "tree"
//
// Output:
// "eert"
//
// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

function sortString(string) {
  let counts = {};
  //add to an object with the counts as the value
  for (let i = 0; i < string.length; i++) {
    if (counts[string[i]]) {
      counts[string[i]] += 1;
    } else {
      counts[string[i]] = 1;
    }
  }
  let sortedKeys = Object.keys(counts).sort((a,b) => {
    return counts[b]-counts[a];
  });

  let total = [];
  for (let i = 0; i < sortedKeys.length; i++) {
    for (let j = 0; j < counts[sortedKeys[i]]; j++) {
      total.push(sortedKeys[i]);
    }
  }

  return total.join('');
}

console.log(sortString('Aabb'));
