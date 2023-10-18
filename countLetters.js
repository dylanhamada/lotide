const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  return;
};

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

const letterCountOne = {
  r: 3,
  o: 1,
  s: 2,
  e: 3,
  a: 1,
  d: 1
};

assertEqual(letterCountOne.r, countLetters("roses are red").r);
assertEqual(letterCountOne.e, countLetters("roses are red").e);
assertEqual(letterCountOne.d, countLetters("roses are red").d);