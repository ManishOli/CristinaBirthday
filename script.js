const cutButton =
    document.getElementById("cutButton");

const birthdayScene =
    document.querySelector(".birthday-scene");

const birthdayPopup =
    document.getElementById("birthdayPopup");

const closeButton =
    document.getElementById("closeButton");

const confetti =
    document.getElementById("confetti");


let cakeCut = false;


/* =================================
   CUT THE CAKE
================================= */

cutButton.addEventListener("click", () => {

    if (cakeCut) return;

    cakeCut = true;


    /* Start knife animation */

    birthdayScene.classList.add("cutting");


    cutButton.innerHTML =
        "✨ Cutting Cristina's Cake...";


    /* Turn off candles */

    setTimeout(() => {

        const flames =
            document.querySelectorAll(".flame");


        flames.forEach(flame => {

            flame.style.animation = "none";

            flame.style.transition =
                "all .8s ease";

            flame.style.transform =
                "scale(0)";

            flame.style.opacity = "0";

        });

    }, 900);


    /* Cake shake */

    setTimeout(() => {

        const cake =
            document.querySelector(".cake");

        cake.style.animation =
            "cakeShake .5s ease";

    }, 1000);


    /* Confetti explosion */

    setTimeout(() => {

        createConfetti();

    }, 1300);


    /* Show birthday card */

    setTimeout(() => {

        birthdayPopup.classList.add("show");

    }, 2400);

});


/* =================================
   CONFETTI
================================= */

function createConfetti() {

    const colors = [

        "#ff5fa8",
        "#ffd166",
        "#7c5cff",
        "#5ce1e6",
        "#ffffff",
        "#ff8c42"

    ];


    for (let i = 0; i < 180; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti-piece"
        );


        /* Position */

        piece.style.left =
            Math.random() * 100 + "%";


        /* Size */

        const size =
            Math.random() * 8 + 5;


        piece.style.width =
            size + "px";


        piece.style.height =
            size * 1.8 + "px";


        /* Color */

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        /* Speed */

        piece.style.animationDuration =
            Math.random() * 2 + 2 + "s";


        /* Delay */

        piece.style.animationDelay =
            Math.random() * .8 + "s";


        confetti.appendChild(piece);


        /* Remove */

        setTimeout(() => {

            piece.remove();

        }, 4500);

    }

}


/* =================================
   CLOSE POPUP
================================= */

closeButton.addEventListener(
    "click",
    () => {

        birthdayPopup.classList.remove(
            "show"
        );

    }
);


/* =================================
   RANDOM SPARKLES
================================= */

function createSparkle() {

    const sparkle =
        document.createElement("div");


    sparkle.innerHTML = "✨";


    sparkle.style.position =
        "fixed";


    sparkle.style.left =
        Math.random() * 100 + "%";


    sparkle.style.top =
        Math.random() * 100 + "%";


    sparkle.style.fontSize =
        Math.random() * 20 + 10 + "px";


    sparkle.style.pointerEvents =
        "none";


    sparkle.style.zIndex = "1";


    sparkle.style.opacity = "0";


    sparkle.style.animation =
        "sparkleAnimation 2s ease forwards";


    document.body.appendChild(
        sparkle
    );


    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}


setInterval(
    createSparkle,
    700
);


/* =================================
   EXTRA ANIMATIONS
================================= */

const extraStyle =
    document.createElement("style");


extraStyle.innerHTML = `

@keyframes sparkleAnimation {

    0% {
        opacity: 0;
        transform: scale(0);
    }

    40% {
        opacity: 1;
        transform: scale(1.3);
    }

    100% {
        opacity: 0;
        transform: scale(0);
    }

}


@keyframes cakeShake {

    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-8px);
    }

    50% {
        transform: translateX(8px);
    }

    75% {
        transform: translateX(-5px);
    }

    100% {
        transform: translateX(0);
    }

}

`;


document.head.appendChild(
    extraStyle
);