function caesarCipher(s, k) {

  let arr = s.split('');
  let n = arr.length;

  console.log(arr);

  for(let i=0;i<n;i++) {
    const initialCharCode = arr[i].charCodeAt(0);
    let newCharCode = 0;
    let newChar = '';
    console.log(initialCharCode);

    if (initialCharCode >= 65 && initialCharCode<= 90) {
      if(initialCharCode+k>90) {
        newCharCode = newCharCode - 90 + k;
        newChar = String.fromCharCode(newCharCode);
        console.log(`newchar: ${newChar}`);
        arr[i] = newCharCode;
      }

    }

  }
  console.log(`arr join: ${arr.join('')}`);

  console.log(`91-97: ${String.fromCharCode(91,92,93,94,95,96,97,122)}`);


}

let s = "AZaz";
let k = 5;

caesarCipher(s,k)
