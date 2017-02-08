// console.log(yourFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 3));

var wordArray = ["ASDF", "BLAH", "Oh! ", "Hi ", "There!"];
var secondWordArray = ["zombie", "taco", "conphident", "fi", "phi", "fo", "fum"];

function putAllOfTheWordsTogether(stringArray, startingIndex) {
  var stringResult = ''; // starting with an empty string
  // concatenate all of the words
  for (var i = startingIndex; i < stringArray.length; i++) {
    stringResult = stringResult + " " + stringArray[i]; // Add a word to the stringResult
  }
  return stringResult;
}


console.log('first time:', putAllOfTheWordsTogether(wordArray, 2));
console.log('second time:', putAllOfTheWordsTogether(secondWordArray, 2));
// console.log('second time: ', putAllOfTheWordsTogether(2));

// putAllOfTheWordsTogether(2);
// console.log('second time: ', stringResult);
