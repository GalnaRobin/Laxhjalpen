function funFunc() {
    let element = document.getElementById("title");
    let list = [
        "HAHAHA vad roligt!",
        "LOL",
        "hahahahahhahahahahhahah",
        "Bartalomeus",
        "Vad är grönt och åker upp och ner? En gurka i en hiss"
    ];
    element.innerHTML = list[Math.floor(Math.random() * list.length)];
}

let currentJoke = [];

async function fetchJoke() {
    try {
        let response = await fetch("https://icanhazdadjoke.com", {
            headers: { Accept: "application/json" },
        });
        let data = await response.json();
        console.log("Fetched joke:", data);

        let joke = data.joke.includes("?") ? data.joke.split("? ") : [data.joke];
        return joke;
    } catch (error) {
        console.error("Error fetching joke:", error);
        return ["Oops! Couldn't load a joke."];
    }
}

async function displayJoke() {
    let joke = await fetchJoke(); 
    currentJoke = joke; // Spara så att andra funktionen kan använda det

    console.log(joke);
    let titleElement = document.getElementById("title");
    titleElement.innerHTML = joke[0];

    let revealButton = document.getElementById("reveal-joke");
    if (joke.length > 1) {
        revealButton.style.display = "block";
    } else {
        revealButton.style.display = "none";
    }
}

function displayJokeReply() {
    let jokeElement = document.getElementById("joke");
    jokeElement.innerHTML = currentJoke[1] || "Haha, that's the whole joke!";
}


document.getElementById("title").innerHTML = "On load";

document.getElementById("dad-joke").addEventListener("click", displayJoke);
document.getElementById("reveal-joke").addEventListener("click", displayJokeReply);
