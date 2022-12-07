// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Javascriptmas</h1>`;
appDiv.innerHTML += `<h2>Panic Function</h2>`;

/**
 * Panic function
 * Write a PANIC! function.  The function should take in a sentence and return the same sentence in all caps with an exclamation point (!) at the end.  Use JavaScript's built in string methods.
 *
 * If the string is a phrase or sentence, add a 😱 emoji in between each word.
 *
 * Example input: "Hello"
 * Example output: "HELLO!";
 *
 * Example input: "I'm almost out of coffee"
 * Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
 */

function panic(sentence) {
  let newSentence;
  if (sentence.split(' ').length > 1) {
    newSentence = sentence.split(' ').join(' 😱 ').concat('!').toUpperCase();
  } else {
    newSentence = sentence.concat('!').toUpperCase();
  }
  return newSentence;
}

// Test your function
console.log(panic('food'));
console.log(panic("I'm almost out of coffee"));
console.log(panic('winter is coming'));
