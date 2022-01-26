const cryptos = ['BTC', 'ETH', 'ADA', 'XRP', 'BNB']

function tickersToList(tickers, isOrdered) {
  for(i=0; i < tickers.length; i++) {
    console.log(tickers[i]);
  }
}

console.log(tickersToList(cryptos));
