'use strict';

let category = 'dev';

const refreshQuoteButton = document.querySelector('#refreshQuote');
const submitFormButton = document.querySelector('#submitForm');

// function getQuote(category) {
//   const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
//   const chuckSaysParagraph = document.querySelector('#chuckSays');

//   get(apiUrl).then(function(response) {
//     chuckSaysParagraph.innerHTML = response.value;
//   });
// }

const getQuote = async (category) => {
  const apiUrl = `https://api.chucknorris.io/jokes/random?category=dev`;
  const chuckSaysParagraph = document.querySelector('#chuckSays');
  const theQuote = await getWithAwait(apiUrl);
  chuckSaysParagraph.innerHTML = theQuote.value;
}

refreshQuoteButton.addEventListener('click', function(e) {
  e.preventDefault();
  getQuote(category);
});

submitFormButton.addEventListener('click', function(e) {
  e.preventDefault();
  const categoryInput = document.querySelector('#categoryInput');

  category = categoryInput.value;
  getQuote(category);
});

getQuote(category);

// getWithAwait(`https://api.chucknorris.io/jokes/random?category=dev`);