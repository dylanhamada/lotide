const countLetters = (string) => {
  // letterCount placeholder
  const letterCount = {};
  // for...of string
  for (let letter of string) {
    // if letter is a letter
    if ((/^[a-z0-9]+$/gi.test(letter))) {
      // if letter is not in placeholder, add it
      if (!letterCount[letter]) {
        letterCount[letter] = 1;
      } else {
        // if letter is in placeholder, increment its value in letterCount by 1
        letterCount[letter]++;
      }
    }
  }
  // return placeholder variable
  return letterCount;
};

module.exports = countLetters;