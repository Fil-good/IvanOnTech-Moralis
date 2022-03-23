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
  console.log(sorted_alphabet_freq); console.log(subarray);

  let l_subarray = subarray.length;

  let res = '';
  let counter = 0;
for(let i=0; i<l_subarray-1;i++) {
  console.log(`in for loop: ${subarray[i]}`); console.log(`subarray[i+1]: ${subarray[i+1]}`);
  if(subarray[0]!=subarray[i+1]) {

    counter += 1;

  }
}
console.log(counter);
if(counter < 2) {
  console.log("YES");
  return 'YES';
} else {
  console.log("NO");
  return 'NO';
}


}

let s = "aabbccccdd";
isValid(s) // ->97
