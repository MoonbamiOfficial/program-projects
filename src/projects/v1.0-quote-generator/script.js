
const apiUrl = "https://api.quotable.io/random";
const quoteDisplay = document.querySelector('.js-quote-display');
const authorDisplay = document.querySelector('.js-author-display');
const newQuoteBtn = document.querySelector('.js-new-quote-btn')
    .addEventListener('click', () => getQuote(apiUrl));

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    quoteDisplay.textContent = data.content;
    authorDisplay.textContent = data.author;
}

getQuote(apiUrl);