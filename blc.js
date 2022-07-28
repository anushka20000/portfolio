var random1 = Math.floor(Math.random() * 6) + 1;
var chooseDice = "dice" + random1 + ".jpg";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", chooseDice);

var random2 = Math.floor(Math.random() * 6) + 1;
var chooseD = "dice" + random2 + ".jpg";

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", chooseD);

if (chooseDice > chooseD) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if (chooseDice < chooseD) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
} else {
    document.querySelector("h1").innerHTML = "draw";
}