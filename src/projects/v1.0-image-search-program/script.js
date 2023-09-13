
const accessKey = "L6vsWTQ-Yn8SdLbGaWdCbBrd3QGaebtSPxCufJXTImE";

let inputValue = "";
let page = 1;

const form = document.querySelector("form")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        page = 1;
        toSearch();
    });
const searchInput = document.querySelector(".js-search-input");
const imageDisplay = document.querySelector(".js-search-display");
const showMoreBtn = document.querySelector(".js-show-more-btn");
showMoreBtn.addEventListener("click", () => toSearch());

async function toSearch() {
    inputValue = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1) {
        imageDisplay.innerHTML = "";

    }

    results.map((result) => {            
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("search-result")
        const img = document.createElement("img");
        img.src = result.urls.small;
        img.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageContainer.appendChild(img);
        imageContainer.appendChild(imageLink);
        imageDisplay.appendChild(imageContainer);
    });

    page++;
    if(page > 1) {
        showMoreBtn.style.display = "block";
}}






