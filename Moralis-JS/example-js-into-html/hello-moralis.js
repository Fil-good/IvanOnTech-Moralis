


// document.querySelector('.js-container').innerHTML = "Hello, Moralis!";
const api_url_1inch = 'https://api.1inch.exchange/v4.0/1/tokens'

const api_url = 'https://api.coinpaprika.com/v1/coins'

async function top_list() {
  try {
    let response = await fetch(api_url);
    let top_ten = await response.json();

    let top_ten_filtered = top_ten.filter(x => x.rank >= 1 && x.rank <= 10).map(x => x.symbol);

    let response_1inch = await fetch(api_url_1inch);
    let response_1inch_to_object = await response_1inch.json();
/*    console.log(`response_1inch: ${response_1inch}`);
    console.log('----------------------------------');
   */ console.log(`response_1inch_to_object: ${top_ten}`); /*
    console.log('----------------------------------');
    console.log(`response_1inch_to_obect.tokens ${response_1inch_to_object.tokens[0]['symbol']}`); */

    // let innerListItems = [];
    // for (let i = 0; i < 10; i++) {
    //   innerListItems.push(top_ten[i].symbol);
    // };

    let caption = document.getElementsByClassName('js-container')[0];
    caption.innerHTML += (`<ul>${top_ten_filtered}</ul>`);

    // let list_addresses = [];
    // for (let i=0; i<10; i++) {
    //   for (let index of response_1inch_to_object.tokens) {
    //     if(innerListItems[i] === index.symbol) {
    //       list_addresses.push(index.address);
    //     }
    //   }
    // }

    // let caption_1inchinsert = document.getElementsByClassName('js-container')[1];
    // caption_1inchinsert.innerHTML += (`<ul>${list_addresses}</ul>`);

  } catch (e) {
    throw e
  };
}




top_list();
