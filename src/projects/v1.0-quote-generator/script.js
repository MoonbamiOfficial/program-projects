
const apiUrl = "https://api.quotable.io/random";
const quoteDisplay = document.querySelector('.js-quote-display');
const authorDisplay = document.querySelector('.js-author-display');
const newQuoteBtn = document.querySelector('.js-new-quote-btn')
    .addEventListener('click', () => getQuote(apiUrl));

const tweetBtn = document.querySelector('.js-tweet-btn')
    .addEventListener('click', () => tweet());

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    quoteDisplay.textContent = data.content;
    authorDisplay.textContent = data.author;
}
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + `"` + quoteDisplay.textContent + `"` + "   — " + authorDisplay.textContent, "Tweet Window", "width=1080, height=720");
}
getQuote(apiUrl);