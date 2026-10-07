/* =========================
   OPEN SURPRISE
========================= */

function openSurprise() {

    const button =
        document.getElementById("surpriseButton");

    const surprise =
        document.getElementById("surprise");


    if (!button || !surprise) {
        return;
    }


    // Make the button disappear

    button.classList.add("button-disappear");


    // Reveal the surprise

    setTimeout(function () {

        surprise.classList.remove("hidden");


        // Scroll to the beginning
        // of the surprise

        setTimeout(function () {

            surprise.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 50);

    }, 400);

}


/* =========================
   FIRST GAME
========================= */

function checkAnswer() {

    const input =
        document.getElementById("answer");

    const result =
        document.getElementById("gameResult");


    if (!input || !result) {
        return;
    }


    const answer =
        input.value
            .trim()
            .toLowerCase();


    if (answer === "ayangdut") {

        result.textContent =
            "Correct! 😭💙 You actually know yourself.";

        result.style.color = "#8edfff";

    } else {

        result.textContent =
            "Hmm... try again 👀💙";

        result.style.color = "#ff9c9c";

    }

}


/* =========================
   CROSSWORD
========================= */

function checkCrossword() {

    const cells =
        document.querySelectorAll(
            ".crossword-grid input"
        );


    const result =
        document.getElementById(
            "crosswordResult"
        );


    if (!cells.length || !result) {
        return;
    }


    let correct = true;


    cells.forEach(function (cell) {

        const correctAnswer =
            (cell.dataset.answer || "")
                .toUpperCase();


        const userAnswer =
            cell.value
                .trim()
                .toUpperCase();


        if (userAnswer === correctAnswer) {

            cell.style.background =
                "#173d42";

            cell.style.borderColor =
                "#8edfff";

        } else {

            cell.style.background =
                "#482d38";

            cell.style.borderColor =
                "#ff8f9f";

            correct = false;

        }

    });


    if (correct) {

        result.textContent =
            "You got them all right! 🥺💙 You really know us. ♡";

        result.style.color =
            "#8edfff";

    } else {

        result.textContent =
            "Almost! 💙 Check the pink boxes and try again!";

        result.style.color =
            "#ff9c9c";

    }

}


/* =========================
   CROSSWORD TYPING
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const inputs =
            document.querySelectorAll(
                ".crossword-grid input"
            );


        inputs.forEach(function (input, index) {


            /* =========================
               TYPE ONE LETTER
            ========================== */

            input.addEventListener(
                "input",
                function () {

                    this.value =
                        this.value
                            .toUpperCase()
                            .replace(/[^A-Z]/g, "")
                            .slice(0, 1);


                    // Move to next box

                    if (
                        this.value !== "" &&
                        index < inputs.length - 1
                    ) {

                        inputs[index + 1].focus();

                    }

                }
            );


            /* =========================
               BACKSPACE
            ========================== */

            input.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Backspace" &&
                        this.value === "" &&
                        index > 0
                    ) {

                        inputs[index - 1].focus();

                    }

                }
            );

        });

    }
);


/* =========================
   SECRET PASSWORD
========================= */

function unlockSecret() {

    const input =
        document.getElementById("password");

    const message =
        document.getElementById(
            "secretMessage"
        );

    const result =
        document.getElementById(
            "passwordResult"
        );


    if (!input || !message || !result) {
        return;
    }


    const password =
        input.value
            .trim()
            .toLowerCase();


    if (password === "dali") {

        message.classList.add("show");


        result.textContent =
            "Correct... you found it. 💙";

        result.style.color =
            "#8edfff";


        setTimeout(function () {

            message.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 200);


    } else {

        result.textContent =
            "Wrong password... try again 👀";

        result.style.color =
            "#ff9c9c";

    }

}