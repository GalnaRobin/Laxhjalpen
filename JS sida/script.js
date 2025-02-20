function funFunc() {
    let element = document.getElementById("title")
    let list = ["HAHAHA vad roligt!", "LOL", "hahahahahhahahahahhahah", "Bartalomeus", "Vad är grönt och åker up och ner?                   En gurka i en hiss"]
    element.innerHTML = list[Math.floor(Math.random() * 5)]
}
document.getElementById("title").innerHTML = "On load"