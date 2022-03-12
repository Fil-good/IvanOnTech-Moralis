


// document.querySelector('.js-container').innerHTML = "Hello, Moralis!";
const api_url_1inch = 'https://api.1inch.exchange/v4.0/1/tokens'
const api_url = 'https://api.coinpaprika.com/v1/coins'

async function top_list() {
  try {
    let response = await fetch(api_url);
    let top_ten = await response.json();

    let innerListItems = '';
    for (let i = 0; i < 10; i++) {
      innerListItems += `<li>${top_ten[i].symbol}</li>`
    };

    document.body.insertAdjacentHTML('afterend', `<ul>${innerListItems}
    </ul>`);

    console.log(`innerHtml: ${document.body.innerHTML}`);
  } catch (e) {
    throw e
  };
}




top_list();
