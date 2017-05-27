function needleInHaystack(needle, haystack) {
  //last index of needle
  let needleLength = needle.length - 1;
  let indexes = []
  let count = 0;
  let currentIndex = 0;
  let startIndex = null;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[currentIndex]) {
      if (currentIndex === 0) {
        startIndex = i;
      }
      //if we match the first char in the string
      if (currentIndex === needleLength){
        //if we at the end
        count++;
        currentIndex = 0;
        indexes.push(startIndex);
      } else {
        //otherwise keep looking over the string
        currentIndex++;
      }
    }
  }
  return indexes + ' --- ' +  count;
}


console.log(needleInHaystack("ABC","ABCDSGDABCSAGAABCCCCAAABAABC"));
