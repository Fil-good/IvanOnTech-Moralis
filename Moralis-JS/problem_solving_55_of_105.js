const cryptos = ['BTC', 'ETH', 'ADA', 'XRP', 'BNB']

function tickersToList(tickers, isOrdered) {

// state space
let result = '';

// computations
  if (isOrdered == true) {
    result +=  `<ol>`
  for(ticker of tickers) {
    result += `<li>${ticker}</li>`;
  }
  result += `</ol>`
  } else {
    result += 'ul';
  }

// return value
  return result;
}

console.log(tickersToList(cryptos, true));
