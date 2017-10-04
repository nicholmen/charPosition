function countLetters(sentence) {
  var charactersObject = {};                                    //  empty Object
  for (var i = 0; i <sentence.length; i++) {         //  loop over the sentence as many characters as it has
    var myCharKey = sentence[i].toLowerCase();       // create Scoped variable to grab SINGLE character, make it lowercase
    if (charactersObject[myCharKey] === undefined) {            // if the value === undefined
      charactersObject[myCharKey] = [];                         // make an empty array
    }
    charactersObject[myCharKey].push(i);                          // OTHERWISE: push the value to the current letter/index's array. this i represents the index location
  }
  delete charactersObject[' '];                                 // delete entry with a key of ' '/space
  return charactersObject                                       // return the object
}
console.log(countLetters("Lighthouse in the house"));