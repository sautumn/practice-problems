// abcde
// abbcseb -> bcse
//
// 1 - 2 - (-1)= 1
// 2-1 = 1
//
// psuedo code
// store all the letters in a object as we go, to avoid looping twice -X
// would like to do this in one pass, but i know i could preemptively store them
// if we find a dupe we know we cant include it in our array -X
//  --- if we find a dupe we might have to include it in our next substring
//  --- so we need to start our string after the occurance of the first index
// have a var for the total max length of store
// if its greater than max, replace
// otherwise keep going until the end of the array


function longestSubString(string) {

  let letters = {};
  let maxLength = 0;
  let startIndex = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] in letters) {
      // we have a duplicate
      if (letters[string[i]] >= startIndex) {
        startIndex = letters[string[i]] + 1;
      }
      //reset the index
      letters[string[i]] = i;
    } else {
      letters[string[i]] = i;
    }

    maxLength = Math.max(maxLength, i - startIndex + 1);
  }
  return maxLength;
}


console.log(longestSubString("pwwkew")); //3
console.log('--------------------');
console.log(longestSubString("abba")); //2
