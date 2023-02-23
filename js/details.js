
const detailContainer = document.querySelector(".word-container");



const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://v2.jokeapi.dev/joke/Any?idRange=" + id;

console.log(id);

async function fetchJoke() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);


        setTimeout(function () {
            createJoke(details);
        }, 2000);

    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = `<p class="messageError">"There was an error loading the details"</p>`
    } 
    
}

fetchJoke();

function createJoke(details) {
    if (details.setup && details.delivery) {
        detailContainer.innerHTML = `
        <div class="word-container">
        <h2>${details.setup}</h2>
        <p class="fontWeight">${details.delivery}</p>
        <p>Category: ${details.category}</p>
        <p>Joke ID: ${details.id}</p>
        </div>
        `;
        document.title = `Joke ID: ${details.id}`;
    } else {
        detailContainer.innerHTML = `
        <div class="word-container">
        <h2>${details.joke}</h2>
        <p>Category: ${details.category}</p>
        <p>Joke ID: ${details.id}</p>
        </div>
        `;
        document.title = `Joke ID: ${details.id}`;
    } 
} 
