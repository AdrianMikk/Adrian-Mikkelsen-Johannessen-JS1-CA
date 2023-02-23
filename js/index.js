import { fetchData } from "./api/read.js";

const API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10"
const container = document.querySelector(".word-container");
const jokeContainer = document.querySelector(".joke-container");


export async function displayJoke() {
    try {
        container.innerHTML = "";
        const word = await fetchData(`${API_URL}`);
        const jokes = await word.jokes;
        console.log(jokes.length);
    
        let jokeBody;

        jokes.forEach((joke) => {
            console.log(joke)

            if (joke.setup && joke.delivery) {
                jokeBody = `
                <div class="word-container">
                <h2>${joke.setup}</h2>
                <p class="fontWeight">${joke.delivery}</p>
                <p>Category: ${joke.category}</p>
                </div>
                `
            } else {
                jokeBody = `
                <div class="word-container">
                <h2>${joke.joke}</h2>
                <p>Category: ${joke.category}</p>
                </div>
                `
            }
            container.innerHTML += `<a href="details.html?id=${joke.id}">${jokeBody}</div>`
        })
    }
    catch (error) {
        console.log(error);
        container.innerHTML = `<p class="messageError">"There was an error loading the jokes"</p>`
    }
            
}



setTimeout(function () {
    displayJoke();
}, 2000);