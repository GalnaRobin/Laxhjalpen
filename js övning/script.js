function showExternalMessage() {
    alert('Hej från extern JavaScript!')
}
/*
var num = 10;

let num2 = 25;

const num3 = 100;

let num4 = 69;

const num5 = 1337;

console.log(num, num2, num3, num4, num5);


let name = "Robin"

let age = 17

age += 5

let isRaining = true

let greet = "Hej jag är " + (age-5) + " år gammal"


let num = 410

let num2 = 10

console.log((num+num2), (num-num2), (num*num2), (num/num2))



let num = 10

let num2 = 15

console.log((num==10), (num2!=5), (num>num2), (num<num2))


let bool1 = true

let bool2 = false

let bool3 = true

console.log(bool1 && bool2, bool1 || bool2, !bool1, (!bool1 || bool2) && bool3)



function sayHello() {
    console.log('Hej, Världen');
    }

sayHello();

function addition(num1, num2) {
    return num1+num2
}

function multi(num1, num2) {
    return num1*num2
}

*/

function checkTemp(temp){
    if (temp > 30) {
        console.log("Det är varmt ute")
    }
    else {
        console.log("Det är inte så varmt ute")
}
}

function checkScore(score){
    if (score > 50) {
        console.log("Godkänt")
    }
    else {
        console.log("Underkänt")
    }
    }

    function checkUdda(tal){
        if (tal % 2 == 0) {
            console.log("Jämnt")
        }
        else {
            console.log("Udda")
        }
}

function checkAge(age){
    if (age < 13) {
        console.log("barn")
    }
    else if (age < 20){
        console.log("Tonåring")
    }
    else {
        console.log("vuxen")
    }
    }

function checkPassword(password){
    if (password == "hemligt") {
        console.log("Åtkomst beviljat")
}
    else {
        console.log("Åtkomst Nekad")
}
}

function checkYear(year){
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log("skottår")
    }
    else {
        console.log("vanligt år")
    }
}

function checkDay(day){
    switch (day){
        case 1:
            console.log("Måndag");
            break;
        case 2:
            console.log("Tisdag");
            break;
        case 3:
            console.log("Onsdag");
            break;
        case 4:
            console.log("Torsdag");
            break;
        case 5:
            console.log("Fredag");
            break;
        case 6:
            console.log("Lördag");
            break;
        case 7:
            console.log("Söndag");
            break;
    }
}

function checkGrade(grade){
    switch (grade){
        case grade > 90:
            console.log("Utmärkt");
            break;
        case grade > 75:
            console.log("Bra");
            break;
        case grade > 50:
            console.log("Godkänt");
            break;
        default:
            console.log("Underkänt");
            break;
    }
}

function checkMonth(month){
    switch (month){
        case 1:
            console.log("januari");
            break;
        case 2:
            console.log("februari");
            break;
        case 3:
            console.log("mars");
            break;
        case 4:
            console.log("april");
            break;
        case 5:
            console.log("maj");
            break;
        case 6:
            console.log("juni");
            break;
    }
}

function checkFruit(fruit){
    switch (fruit){
        case 1:
            console.log("äpple");
            break;
        case 2:
            console.log("banan");
            break;
        case 3:
            console.log("apelsin");
            break;
        case 4:
            console.log("mango");
            break;
        case 5:
            console.log("kiwi");
            break;
        case 6:
            console.log("vattenmelon");
            break;
    }
}

function checkLight(light){
    switch (light){
        case "röd":
            console.log("stanna");
            break;
        case "gul":
            console.log("vänta");
            break;
        case "grön":
            console.log("kör");
            break;
    }
}

function checkSeason(season){
    switch (season){
        case 1:
            console.log("Vår");
            break;
        case 2:
            console.log("Sommar");
            break;
        case 3:
            console.log("Höst");
            break;
        case 4:
            console.log("Vinter")
    }
}

function Loop10() {
    for (let x = 1; x < 11; x++){
        console.log(x)
    }
}

function LoopNotEven20() {
    for (let x = 1; x < 21; x++){
        if (x % 2 != 0){
        console.log(x)
    }
    }
}

function while10To0() {
    let x = 10;
    while (x > 0){
        console.log(x)
        --x
    }
}

function whileEven1To20() {
    let x = 0;
    while (x < 21){
        if (x % 2 == 0){
            console.log(x)
        }
        ++x
    }
}

function do1To5(){
    let x = 0
    do {
        console.log(x)
        x++
    } while (x < 5+1)
}

function do5To1(){
    let x = 5
    do {
        console.log(x)
        x--
    } while (x > 0)
}

function arrays(){
    let arr = [1, 2, 3, 4, 5]
    console.log(arr)
}

function arraysPush(){
    let arr = [1, 2, 3, 4, 5]
    arr.push(6)
    console.log(arr)
}

function arraysPop(){
    let arr = [1, 2, 3, 4, 5]
    arr.pop()
    console.log(arr)
}
function arraysUnshift(){
    let arr = [1, 2, 3, 4, 5]
    arr.unshift(0)
    console.log(arr)
}

function arraysShift(){
    let arr = [1, 2, 3, 4, 5]
    arr.shift()
    console.log(arr)
}

function arraysString(){
    let arr = ["Bananer ", "är ", "så ", "fruktansvärt ", "goda!"]
    for (let x = 0; x < 5; x++){
        console.log(arr[x])
    }
}

function arrayEach(){
    let arr = [4, 6, 3, 9, 2, 5, 0, 4, 3, 6]
    arr.forEach(arr => {console.log(arr)})
}

function arraySum(){
    let arr = [4, 6, 3, 9, 2, 5, 0, 4, 3, 6]
    let sum = 0
    arr.forEach(arr => {sum += arr})
    console.log(sum)
}

function arrayNames(){
    let arr = ["Robin", "Emil", "Victor", "Jacob", "Maxen"]
    for (let x = 0; x < 5; x++){
        console.log(arr[x])
    }
}

function objects(){
    let obj = {färg:"blå", modell:"Volvo", år:1997}
    obj.pris = 40000 
    obj.modell = "BMW"
    delete obj.år
    console.log(obj.modell)
    console.log(obj.färg)
    console.log(obj.pris)
}

function objectsFor(){
    let obj = {färg:"blå", modell:"Volvo", år:1997}
    for (thing in obj){
        console.log(thing)
        console.log(obj[thing])
    }
}

function objectsForEach(){
    let obj = {färg:"blå", modell:"Volvo", år:1997}
    Object.entries(obj).forEach(([key, value]) => {console.log(key, value)})
}

let texten = document.getElementsByClassName("blåDiv")

console.log(texten)

for (let x = 0; x < 3; x++) {
    texten[x].style.backgroundColor = "blue"
}

let high = document.querySelector(".highlight")

high.style.color = "red"

let box = document.getElementById("minBox")

box.style.width = "200px"
box.style.height = "100px"

let content = document.getElementById("content")

content.innerHTML = "Det här är ett nytt innehåll"

document.getElementById('externalButton').addEventListener('click', showExternalMessage);

