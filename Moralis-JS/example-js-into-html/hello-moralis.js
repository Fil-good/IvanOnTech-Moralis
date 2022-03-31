
// document.querySelector('.js-container').innerHTML = "Hello, Moralis!";

const api_url_1inch = 'https://api.1inch.exchange/v4.0/1/tokens'

const api_url = 'https://api.coinpaprika.com/v1/coins'

async function top_list() {
  // try {
    let response = await fetch(api_url);
    let top_ten = await response.json();
    let top_ten_filtered = top_ten.filter(x => x.rank >= 1 && x.rank <= 10).map(x => x.symbol);
    return top_ten_filtered;

    let caption = document.getElementsByClassName('js-container')[0];
    caption.innerHTML += (`<ul>${top_ten_filtered}</ul>`);
  // } catch (e) {
  //   throw e
  // };
}

async function getTickerData(top_ten_filtered) {
  const response = await fetch('https://api.1inch.exchange/v4.0/1/tokens');
  const tokens = await response.json();
  const tokenList = Object.values(tokens.tokens);

  return tokenList.filter(token => top_ten_filtered.includes(token.symbol));

}

top_list()
  .then(tickerlist => getTickerData(tickerlist))
  .then(console.log);
