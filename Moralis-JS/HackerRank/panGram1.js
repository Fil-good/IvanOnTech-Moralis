// first solution, functional in console, but Hackerrank doesnt like this solution


function pangrams(s) {
  // Write your code here
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  let S = s.toUpperCase();
  let res = '';

  const regex = /A-z/g;
  for (a of regex) {
    if (s.find(a) == true) {
      return 'pangram';
      for (letter of alphabet) {
        if (S.includes(letter)) {
          res = 'pangram';
        } else {
          return 'not pangram';
          res = 'not pangram';
          break;
        }
      }
