// regex is not iterable, see solution panGram.js

function pangrams(s) {
  // Write your code here
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  let S = s.toUpperCase();
  let res = '';

  const regex = /A-z/g;
  for (a of regex) {
    if (s.find(a) == true) {

      for (letter of alphabet) {
        if (S.includes(letter)) {
          console.log('pangram');
        } else {
          console.log('not pangram');

        }
      }
    }
  }
}

let s= "abcdefghijklmnopqrstuvwxyz";
pangrams(s)
