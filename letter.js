document.addEventListener("DOMContentLoaded", function() {
    var messageState = document.getElementById("messageState");
    var message = document.querySelector(".message");
    var heart = document.querySelector(".heart");

    messageState.addEventListener("change", function() {
        message.classList.remove("openNor", "closeNor");
        if (messageState.checked) {
            message.classList.remove("closed", "no-anim");
            message.classList.add("openNor");
            heart.classList.remove("closeHer", "openedHer");
            heart.classList.add("openHer");
            document.querySelector(".container").style.backgroundColor = "#64dbff";
            console.log("Abrindo");
        } else {
            message.classList.remove("no-anim");
            message.classList.add("closeNor");
            heart.classList.remove("openHer", "openedHer", "beating");
            heart.classList.add("closeHer");
            document.querySelector(".container").style.backgroundColor = "#fce4ec";
            console.log("fechando");
        }
    });

    message.addEventListener('webkitAnimationEnd', function(e) {
        console.log("Animation End");
        if (message.classList.contains("closeNor"))
            message.classList.add("closed");
        message.classList.remove("openNor", "closeNor");
        message.classList.add("no-anim");
    });

    heart.addEventListener('webkitAnimationEnd', function(e) {
        console.log("Animation End");
        if (!heart.classList.contains("closeHer")) {
            heart.classList.add("openedHer", "beating");
        } else {
            heart.classList.add("no-anim");
            heart.classList.remove("beating");
        }
        heart.classList.remove("openHer", "closeHer");
    });
});

