//Given an array of characters, return the array with every vowel doubled. For example:

//input:
// ['w','h','a','t',' ','o','n',' ','e','a','r','t','h',' ','a','r','e',' ','y','o','u',' ','t','a','l','k','i','n','g',' ','a','b','o','u','t','?']
//should return :
// ['w','h','a','a','t',' ','o','o','n',' ','e','e','a','a','r','t','h',' ','a','a','r','e','e',' ','y','o','o','u','u',' ','t','a','a','l','k','i','i','n','g',' ','a','a','b','o','o','u','u','t','?']

function vowelDouble(input){
  // no other datastructures allowed
  let newIndex = input.length - 1;
  let oldIndex = input.length;

  for (var i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u'){
      // go through and count all the vowels.
      newIndex++;
    }
  }
  for (let i = oldIndex - 1; i >= 0; i--) {
    input[newIndex] = input[i];
    newIndex--;
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u'){
      // if we find a vowel we need to double it
      input[newIndex] = input[i];
      newIndex--;
    }
  }
  return input;
}

let inputArray = ['w','h','a','t',' ','o','n',' ','e','a','r','t','h',' ','a',
  'r','e',' ','y','o','u',' ','t','a','l','k','i','n','g',' ','a','b','o','u','t',
  '?'];

let doubledArray = ['w','h','a','a','t',' ','o','o','n',' ','e','e','a','a','r',
  't','h',' ','a','a','r','e','e',' ','y','o','o','u','u',' ','t','a','a','l','k',
  'i','i','n','g',' ','a','a','b','o','o','u','u','t','?'];

const assert = (condition1, condition2, errorMessage) => {
  if (condition1 === condition2) {
    console.log('Test passed.');
  } else {
    console.log(errorMessage);
  }
};

assert(JSON.stringify(vowelDouble(inputArray)), JSON.stringify(doubledArray), 'The vowels in the input array should be doubled.')
