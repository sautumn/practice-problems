function rockPaperScissors(n){
  let rps = ['rock', 'paper', 'scissors'];
  let total = [];

  function recurse(roundsLeft, roundsSoFar){
    if (roundsLeft === 0){
      return total.push(roundsSoFar);
    } else {
      for (var i = 0; i < n; i++) {
        let currPlay = rps[i];

        recurse(roundsLeft-1, roundsSoFar.concat(rps[i]));
      }
    }
  }
  recurse(n, []);
  return total;
}
// console.log(rockPaperScissors(3));


function allCombinations(string){
  const arrString = string.split('');
  const length = arrString.length;
  let total = [];
  function recurse(lettersLeft, currCombo) {
    if (lettersLeft === 0) {
      total.push(currCombo.join(''));
      return;
    }
    arrString.forEach(elem => {
      recurse(lettersLeft-1, currCombo.concat(elem));
    });
  }
  recurse(length, []);
  console.log(total);
  return;
}
// allCombinations('abc');

function allPermutations(string) {
  const arrString = string.split('');
  const length = arrString.length-1;
  let total = [];

  function recurse(currChoices) {
    if (currChoices.length > 3) {
      total.push(currChoices);
    }
    for (var i = 0; i < arrString.length; i++) {
      recurse(currChoices.concat(arrString[i]))
    }
    arrString.pop()
  }
  recurse([]);
  console.log(total);
}

allPermutations('abc');
