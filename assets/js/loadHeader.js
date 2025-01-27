// js/loadHeader.js
document.addEventListener("DOMContentLoaded", function () {
    // Fetch the header.html file
    fetch("./includes/header.html")
        .then((response) => response.text())
        .then((data) => {
            // Insert the header into the element with ID "header"
            document.getElementById("header").innerHTML = data;
        })
        .catch((error) => {
            console.error("Error loading the header:", error);
        });
});