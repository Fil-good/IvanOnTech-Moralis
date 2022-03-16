


// document.querySelector('.js-container').innerHTML = "Hello, Moralis!";
const api_url_1inch = 'https://api.1inch.exchange/v4.0/1/tokens'
const api_url = 'https://api.coinpaprika.com/v1/coins'

async function top_list() {
  try {
    let response = await fetch(api_url);
    let top_ten = await response.json();

    let response_1inch = await fetch(api_url_1inch);
    let response_1inch_to_object = await response_1inch.json();
    console.log(response_1inch);
    console.log('----------------------------------');
    console.log(response_1inch_to_object);
    console.log('----------------------------------');



    console.log(response_1inch_to_object.tokens);

    let innerListItems = '';
    for (let i = 0; i < 10; i++) {
      innerListItems += `<li>${top_ten[i].symbol}</li>`
    };
    let caption = document.getElementsByClassName('js-container')[0];
    caption.innerHTML += (`<ul>${innerListItems}</ul>`);

  } catch (e) {
    throw e
  };
}




top_list();
