var buttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        sound(this.innerHTML);
        animation(this.innerHTML)
    });
}
document.addEventListener("keypress", function(press) {
    sound(press.key);
    animation(press.key);
});

function sound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("Tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("Tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("Tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("Tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
        case "l":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(buttoninnerHtml);
    }
}

function animation(currKey) {
    var active = document.querySelector("." + currKey);
    active.classList.add("pressed");
    setTimeout(function() {
        active.classList.remove("pressed");
    }, 100);
}