const cryptos = ['BTC', 'ETH', 'USDT', 'BNB', 'ADA'];

for (let crypto of cryptos) { /* FOR OF ; in PYTHON FOR IN gives indices! */
  console.log(crypto);
}

console.log('-----');

// older JS
for (let index in cryptos) {
  console.log(cryptos[index]);
}

console.log('separator ---------------')

for (let i = 0; i < cryptos.length; i++) {
  console.log(cryptos[i]);
}



console.log('separator ---------------')

let i = 0;
while(i < cryptos.length) {
  console.log(cryptos[i]);
  i += 1;
}

console.log('separator ---------------')

let number = 2**10;
console.log(number);
