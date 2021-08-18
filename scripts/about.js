/*
    Date: 12 May 2021
    Author: Kyra Elyse Alday
    Topic: Assignment 02 - Sorrento by the Sea
    Description: JavaScript File (about.html)
 */

"use strict";

// declare constants and variables
let slideIndex = 0;

// get the next and previous links
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");

// add event listeners
previous.addEventListener("click", previousSlide);
next.addEventListener("click", nextSlide);

// call function
displayDots(3);
showSlide();

// -------------------- FUNCTIONS -------------------- //
// display slides
function showSlide()
{
   // create objects
   const image1 = {file: "ocean_beach_2.jpg", description: "Ocean Beach", alt: "Ocean Beach"};
   const image2 = {file: "back_beach_sorrento.jpg", description: "Sorrento Back Beach", alt: "Sorrento Back Beach"};
   const image3 = {file: "ocean_beach.jpg", description: "Ocean Beach", alt: "Ocean Beach"};
   
   // using an array
   const images = [image1, image2, image3];
    
    // limit slideshow
    if (slideIndex >= images.length)
    {
        slideIndex = 0; // reset to the start
    }
    if (slideIndex === -1)
    {
        slideIndex = images.length-1; // reset to last slide 
    }

    // display the slide
    const slideImage = document.querySelector(".slides img");
    slideImage.src = "ICTWEB431_AE_Pro_1of2_SR1/" + images[slideIndex].file;
    slideImage.alt = images[slideIndex].alt;

   //  slides[slideIndex - 1].style.display = "block";

    // display description
    const description = document.querySelector(".description");
    description.innerHTML = images[slideIndex].description;

    // display the slide dot as the current dot
    // remove the class active from all dots
    const dotsList = document.getElementsByClassName("dot");

    for (let i = 0; i < dotsList.length; i++)
    {
        dotsList[i].classList.remove("active");
    }
    
    // set the class for the slide as "active"  
    dotsList[slideIndex].classList.add("active");

}

// display dots
function displayDots(num)
{
    const dots = document.getElementById("dots");

    // display dot for each slide
    for (let i = 0; i < num; i++)
    {
        dots.innerHTML += "<span class='dot'>&#9679;</span>";
    }

    // get the dots
    const dotsList = document.getElementsByClassName("dot");

    // add event listener to each dot
    for (let i = 0; i < dotsList.length; i++)
    {
        dotsList[i].addEventListener("click", currentSlide);
    }
}

// non-sequential navigation
function currentSlide()
{
    // get index of selected dot
    slideIndex = Array.from(this.parentNode.children).indexOf(this);

    // display the slide
    showSlide();
}

// navigate to previous slide
function previousSlide()
{
    slideIndex--;
    showSlide();
}

// navigate to next slide
function nextSlide()
{
    slideIndex++;
    showSlide();
}