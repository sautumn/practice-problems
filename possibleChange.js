// recursive, memo

// const possibleChange = (amount, coins) => {
//   let memo = {};
//   const memoize = (string) => {
//     if (memo[string]){
//       return memo[string];
//     } else {
//       memo[string] = string;
//     }
//   };
//   let combinations = 0;
//   // let currSum = 0;
//
//   const recurseCombinations = (amountLeft) => {
//     if (amountLeft > amount ) {
//       return 0;
//     }
//     if (amountLeft === amount) {
//       return 1;
//     }
//     for (var i = 0; i < coins.length; i++) {
//       if (coins[i] > amountLeft) {
//         recurseCombinations(amountLeft-coins[i]);
//       }
//     }
//   };
//   recurseCombinations(amount);
// };
//
// console.log(possibleChange(4, [1,2,3]));


function possibleChange(n, array){
  // initialize our counter
  let count = 0;
  function recurse(index, moneyLeft) {
    //base case
    if (index === 0){
      // if our last coin can be used by our smallest amount
      if (moneyLeft % array[index] === 0) {
        count++;
        return;
      }
    }

    // if we have money left we can use our curr num
    while(moneyLeft > 0){
      //try all combos with 1st deno
      recurse(index-1, moneyLeft);
      // subtract amount,let the while loop keep going
      moneyLeft = moneyLeft - array[index]
    }
  }

  recurse(array.length-1, n);
  return count;
}

console.log(possibleChange(4, [1,2,3]));
