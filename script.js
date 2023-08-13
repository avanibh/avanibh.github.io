// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Array of GIF filenames
    const gifFilenames = ["gif2.gif", "gif3.gif", "gif4.gif"];

    // Get the background div element
    const backgroundDiv = document.getElementById("background");

    // Randomly select a GIF filename from the array
    const randomGifIndex = Math.floor(Math.random() * gifFilenames.length);
    const randomGifFilename = gifFilenames[randomGifIndex];

    // Set the background GIF
    backgroundDiv.style.backgroundImage = `url(${randomGifFilename})`;
});
