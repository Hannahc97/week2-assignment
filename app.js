console.log("Hello world!");

//I want to store my images

//inside array you want objects - like source, alt, width...
const images = [
    {src : "url", alt : "description of the image"}
];

// TODO: I want to create my thumbnail images
// STEP 1: Select the DOM element we are manipulating 
// I need to select both the thumbnail container and large image container

// Since creating the thumbnail images takes more than 1 step, what is the best way to write a block of code? Function

// I want to re-use this function for all my images --> I need parameters (they are placeholders)
function createThumbnails (imagesArray) {
    // I need to create more than 1 thumbnail - I can use loop
    // You can use different way to loop through your array: for loop or forEach()
    // Inside loop we have a few steps to do:
    // Create an image element 
    // We need to assign values to the image element properties
    // We also need to add a value to the className property 
    // We need to add an event to the image elements we are creating here 
    // We need to append the images to the thumbnail container 
}
createThumbnails (images)

// TODO: I want to create my larger images 
// The larger images will be created when the user triggers the thumbnail images event
// This function will be event handler for our imageas
function createLargeImageHandler (largeImage){
    // I want to remvoe the image that's in the full screen and create a new images with new properties 
    // largeImageContainer.innerHTML = null / ""
    // Create an image element
    // We need to assign values to the image element properties
    // We also need to add a value to the className property 
}
//! We don't call the createLargeImagesHandler here. It is an event handler 


