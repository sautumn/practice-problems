/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let validPalindrome = true;
  if (s.length <= 1){
      return true;
  }
  const regex = /[^a-zA-Z0-9]/gi;
  let string = s.replace(regex,'').toLowerCase();
  let start = 0;
  let stop = string.length - 1;
  console.log(string)
  while(start < stop) {
    if (string[start] !== string[stop]) {
      validPalindrome = false;
      break;
    }
    start++;
    stop--;
  }
  return validPalindrome;
};
