function caesarCipher(s, k) {

let arrFromStr = s.split('');
let n = arrFromStr.length;
let asciiCodes = [];
// changing charcodes for every element of string, and store in array
for(let i=0 ; i<n;i++) {
    if(s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122) {
      if(s.charCodeAt(i)+k<=122) {
          asciiCodes[i] = s.charCodeAt(i) + k;
        } else {
            asciiCodes[i] = s.charCodeAt(i) - (26-k);
        }
    } else if (s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90) {
        if(s.charCodeAt(i)+k<=90) {
            asciiCodes[i] = s.charCodeAt(i)+k;
        } else {
            asciiCodes[i] = s.charCodeAt(i) - (26-k);
        }
      } else {
        asciiCodes[i] = s.charCodeAt(i);
        }
}

  // changing charcode to character for every element of array
  let newString = String.fromCharCode(...asciiCodes);

  return newString;

}



let s = "AZ---az-----";
let k = 5;

caesarCipher(s,k)
