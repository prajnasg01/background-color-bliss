document.addEventListener("DOMContentLoaded", function() {
    var csscodedisplay = document.querySelector("h3");
    var color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var body = document.getElementById("gradient");

    // Update the initial display of the CSS code
    function updateCSSCodeDisplay() {
        csscodedisplay.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    }

    // To display the CSS code of the background color on screen
    function displayColor() {
        body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
        updateCSSCodeDisplay();
    }

    // Generate a random color code
    function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Assign random colors and update display
    function assignRandomColor() {
        color1.value = generateRandomColor();
        color2.value = generateRandomColor();
        displayColor();
    }

    // Add event listeners
    var randomButton = document.getElementById("Random");
    randomButton.addEventListener("click", assignRandomColor);

    color1.addEventListener("input", displayColor);
    color2.addEventListener("input", displayColor);

    // Initial display
    updateCSSCodeDisplay();
    displayColor();
});
