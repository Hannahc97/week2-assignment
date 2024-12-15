console.log("Hello world!");

//I want to store my images

//inside array you want objects - like source, alt, width...
const images = [
    { src : "./media/mangoes.jpg", alt : "A bunch of ripe mangoes laid together "},
    { src: "./media/pineapple.webp", alt: "Two pineapples placed next to each other" },
    { src: "./media/strawberries.webp", alt: "Strawberries spread out on a pink background" },
    { src: "./media/blueberries.avif", alt: "A bunch of blueberries" },
    { src: "./media/dragonfruit.jpg", alt: "A whole dragonfruit and a sliced dragonfruit next to each other" }
    // { src: "local relative path", alt: "a description of the image" }
];

// TODO: I want to create my thumbnail images
// STEP 1: Select the DOM element we are manipulating 
// I need to select both the thumbnail container and large image container

const thumbnailContainer = document.getElementById("thumbnail-container");

const largeImageContainer = document.getElementById("large-image-container");


// Since creating the thumbnail images takes more than 1 step, what is the best way to write a block of code? Function

// I want to re-use this function for all my images --> I need parameters (they are placeholders)
function createThumbnails (imagesArray) {
    for (let i =0; i < imagesArray.length; i++){
        const image = imagesArray[i];
        thumbnail = document.createElement("img");
        thumbnail.src = image.src;
        thumbnail.alt = image.alt;
        thumbnail.className = "thumbnail";

        thumbnail.addEventListener("click", function () {
            createLargeImageHandler(image);
            });
            thumbnailContainer.appendChild(thumbnail);
    };
};
createThumbnails (images);
    


    // I need to create more than 1 thumbnail - I can use loop
    // You can use different way to loop through your array: for loop or forEach()
    // Inside loop we have a few steps to do:
    // Create an image element 
    // We need to assign values to the image element properties
    // We also need to add a value to the className property 
    // We need to add an event to the image elements we are creating here 
    // We need to append the images to the thumbnail container 



// TODO: I want to create my larger images 
// The larger images will be created when the user triggers the thumbnail images event
// This function will be event handler for our images
function createLargeImageHandler (largeImage){
    // I want to remove the image that's in the full screen and create a new images with new properties 
    largeImageContainer.innerHTML = "";
    const largeImg = document.createElement("img");
    largeImg.src = largeImage.src;
    largeImg.alt = largeImage.alt;
    largeImg.className = "largeImage";
    largeImageContainer.appendChild(largeImg);
    
    // Create an image element
    // We need to assign values to the image element properties
    // We also need to add a value to the className property 
};
//! We don't call the createLargeImagesHandler here. It is an event handler 


// const thumbnailContainer = document.getElementById("thumbnail-container");
// const largeImageContainer = document.getElementById("large-image-container");

// function createThumbnails(imagesArray) {
//     for (let i = 0; i < imagesArray.length; i++) {
//       const image = imagesArray[i];
//       const thumbnail = document.createElement("img");
//       thumbnail.src = image.src;
//       thumbnail.alt = image.alt;
//       thumbnail.className = "thumbnail";
//       thumbnail.addEventListener("click", function () {
//         createLargeImageHandler(image);
//       });
//       const thumbnailContainer = document.getElementById("thumbnail-container");
//   thumbnailContainer.appendChild(thumbnail);
//     }
// }