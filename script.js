document.addEventListener("DOMContentLoaded", (event) => {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum)
    let attempt_count = 0;
    const attemptDisplay = document.getElementById("attempts");
    const hintDisplay = document.getElementById("hints");
    const progressBar = document.getElementById("progress");

    document.getElementById("check-btn").addEventListener("click", () => {
        const numInput = Number(document.getElementById("guess").value);

        // Increment attempt count by 1 each click, increment progressbar by 1 each click
        attempt_count++;
        attemptDisplay.textContent = String(attempt_count);
        progressBar.value = Math.min(progressBar.value + 1, progressBar.max);


        // Kept console log AND textContent overwrite for debugging purposes
        if (numInput < randomNum) {
            hintDisplay.textContent = "The number is higher than your guess!📈";
            console.log("The number is higher than your guess.");
        } else if (numInput > randomNum) {
            hintDisplay.textContent = "The number is lower than your guess!📉";
            console.log("The number is less than your guess.");
        } else if (numInput == randomNum) {
            document.getElementById("check-btn").style.visibility = "hidden";
            hintDisplay.textContent = "WE HAVE A WINNER!"
            console.log("WE HAVE A WINNER!!!");
        }
        if (progressBar.value >= 100) {
            hintDisplay.textContent = "Now how'd you manage that..."
            document.getElementById("guess").style.visibility = "hidden";
            document.getElementById("check-btn").style.visibility = "hidden";

        }

    });

    // Clear attempt count and regenerate random number upon restarting
    document.getElementById("restart-btn").addEventListener("click", () => {
        document.getElementById("check-btn").style.visibility = "visible";
        randomNum = Math.floor(Math.random() * 100) + 1;
        attempt_count = 0
        attemptDisplay.textContent = String(attempt_count)
        console.log(randomNum)
        console.log("New number selected. Attempt Count reset.")


    })

});

