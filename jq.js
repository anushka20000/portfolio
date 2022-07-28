var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNnumber = Math.floor(Math.random() * 3);
    var randomChosenColour = buttonColors[randomNnumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeout(100).fadein(100).fadeout(100).fadein(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}