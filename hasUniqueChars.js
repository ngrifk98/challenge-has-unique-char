// CODE CHALLENGE: Has Unique Characters
/* Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true
*/

// Write your code below

function hasUniqueCharacters(word) {
    for (let i = 0; i < word.length; i++) {
      const currentChar = word[i];
      if (word.indexOf(currentChar) !== i) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log("Monday:", hasUniqueCharacters("Monday"));   // true
  console.log("Moonday:", hasUniqueCharacters("Moonday"));  // false
  console.log("Bob:", hasUniqueCharacters("Bob"));          // true
  