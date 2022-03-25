
// reflection after seeing some solutions: better to work with HASH (see solution below)

function isValid(s) {

let l = s.length;

let alphabet = new Array(26).fill(0); console.log(`alphabet: ${alphabet}`);

for (let i=0; i<l;i++) {
  // 'a'.charCodeAt(0) gives 97;
let index = s.charCodeAt(i)-97;
alphabet[index] += 1;
}

console.log(`alphabet: ${alphabet}`);

let sorted_alphabet_freq = alphabet.sort(); console.log(`before loop: ${sorted_alphabet_freq}`);

let subarray = [...sorted_alphabet_freq];
for (let i=0; i<26;i++) {
  if(sorted_alphabet_freq[i] == 0) {
    subarray.shift();
  }
}
  console.log(sorted_alphabet_freq); console.log(`subarray: ${subarray}`);

  let l_subarray = subarray.length;

  let res = '';
  let counter = 0;

// aabbcd -> only one freq change but !isValid
// aabbcccc -> only one freq change but !isValid
console.log(`:: ${subarray[1]} ::`);

  switch(true) {
  case subarray[0] == subarray[l_subarray-1]:
    console.log("YES");
    res="YES";
    break;

  case (subarray[l_subarray-1]==subarray[1]) && (subarray[0]==1):
    res="YES";
    break;

  case (subarray[0]==subarray[l_subarray-2] && subarray[l_subarray-1]==1):
    res="YES";
    break;

  case (subarray[0]==subarray[1]) && (subarray[0] == subarray[l_subarray-2] && (subarray[l_subarray-1]-subarray[l_subarray-2]<2)):
      console.log("YESS");
    res= "YES";
    break;

  case (subarray[l_subarray-1] == subarray[l_subarray-2]) && (subarray[1]==subarray[l_subarray-1] && (subarray[l_subarray-1]-subarray[0]<2)):
      console.log("YESSS");
    res= "YES";
    break;

  default:
      console.log("NOOOOOOO");
    res="NO";
  }

return res;


}

let s = "aaaaabc";
// let s = "aabbcdd";
isValid(s) // ->97


/* alternative solution from hackerrank discussions:

function isValid(s) {
  const f = {}
  for (const c of s)
    f[c] = f[c] ? f[c] + 1 : 1

  let x = Object.values(f).sort((a, b) => a - b)

  let max = x[x.length - 1]
  let max2nd = x[x.length - 2]
  let min = x[0]
  let min2nd = x[1]

  if (max === min) return 'YES'
  if (max === min + 1 && min === max2nd) return 'YES'
  if (min === 1 && max === min2nd) return 'YES'
  return 'NO'
}
*/
