
// document.querySelector('.js-container').innerHTML = "Hello, Moralis!";

const api_url_1inch = 'https://api.1inch.exchange/v4.0/56/tokens'
// binance: 56 'https://api.1inch.io/v4.0/56/tokens'

const api_url = 'https://api.coinpaprika.com/v1/coins'

async function top_list() {
    let response = await fetch(api_url);
    let top_ten = await response.json();
    let top_ten_filtered = top_ten.filter(x => x.rank >= 1 && x.rank <= 50).map(x => x.symbol);
    return top_ten_filtered;
    // let caption = document.getElementsByClassName('js-container')[0];
    // caption.innerHTML += (`<ul>${top_ten_filtered}</ul>`);
}

async function getTickerData(top_ten_filtered) {
  const response = await fetch('https://api.1inch.exchange/v4.0/56/tokens');
  const tokens = await response.json();
  const tokenList = Object.values(tokens.tokens);

  return tokenList.filter(token => top_ten_filtered.includes(token.symbol));
}

function renderForm(tokens) {
  const options = tokens.map(token =>
    `<option value="${token.decimals}-${token.address}">${token.name} (${token.symbol})</option>`)
   document.querySelector('[name=from-token]').innerHTML=options;
   document.querySelector('[name=to-token]').innerHTML=options;
   document.querySelector('.js-submit-quote').removeAttribute('disabled');
}


async function formSubmitted(event) {
  event.preventDefault(); // cancel form submission
  const fromToken = document.querySelector('[name=from-token]').value;
  const toToken = document.querySelector('[name=to-token]').value;
  const[fromDecimals, fromAddress] = fromToken.split('-'); // example of desctructuring
  const[toDecimals, toAddress]= toToken.split('-');
  const fromUnit = 10 ** fromDecimals;
  const decimalRatio = 10 ** (toDecimals - fromDecimals);
// key value pairs after ? (query string) - separated by ampersand &
  try {
  const url = `https://api.1inch.exchange/v4.0/56/quote?fromTokenAddress=${fromAddress}&toTokenAddress=${toAddress}&amount=${fromUnit}`;
  const response = await fetch(url);
  const quote = await response.json();
  const exchange_rate = Number(quote.toTokenAmount)/Number(quote.fromTokenAmount)/decimalRatio;
  document.querySelector('.js-container-quote').innerHTML = `
    <p>1 ${quote.fromToken.symbol} = ${exchange_rate} ${quote.toToken.symbol}</p2>
    <p>Estimated Gas: ${quote.estimatedGas}</p>
  `;
  } catch(e) {
    document.querySelector('.js-container-quote').innerHTML = "the conversion didn't succeed!"
  }

}


document
  .querySelector('.js-submit-quote')
  .addEventListener('click', formSubmitted);




top_list()
  .then(tickerlist => getTickerData(tickerlist))
  .then(renderForm);

formSubmitted();
