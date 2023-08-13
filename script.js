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
// Get the image element
const backgroundImage = document.querySelector('.image-background');

// Create a new Image object
const img = new Image();
img.src = backgroundImage.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
img.crossOrigin = 'anonymous';

// Calculate the perceived brightness of the image
img.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, img.width, img.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let sum = 0;
    for (let i = 0; i < imageData.data.length; i += 4) {
        sum += imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2];
    }
    const averageBrightness = sum / (imageData.width * imageData.height * 3);

    // Determine text color based on brightness
    const textColor = averageBrightness > 127.5 ? 'black' : 'white';

    // Set text color dynamically
    const content = document.querySelector('.content');
    content.style.color = textColor;
};
