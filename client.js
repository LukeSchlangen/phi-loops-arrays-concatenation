// console.log(yourFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 3));

var wordArray = ["ASDF", "BLAH", "Oh! ", "Hi ", "There!"];
// console.log(wordArray.join('!!!'));

var stringResult = ''; // starting with an empty string

// stringResult = 'taco';

// concatenate all of the words
for (var i = 2; i < wordArray.length; i++) {
  // console.log('before', stringResult);
  stringResult = stringResult + wordArray[i]; // Add a word to the stringResult
  // console.log('after', stringResult);
}

// stringResult = stringResult + wordArray[0];
// stringResult = stringResult + wordArray[1];
// stringResult = stringResult + wordArray[2];
// stringResult = stringResult + wordArray[3];
// stringResult = stringResult + wordArray[4];

console.log(stringResult);
