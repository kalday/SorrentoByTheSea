/*
    Author: Kyra Alday
    Date: 12 May 2021
    Topic: Assignment 02
    Description: Contact Us Page (contact.js) = JAVASCRIPT
 */

 "use strict";

 // get form 
 const form = document.querySelector("form");

 // attach event to form 
 form.addEventListener("submit", validate);

 function validate(event)
 {
     // declare variables
     const firstName = document.getElementById("firstName");
     const lastName = document.getElementById("lastName");
     const mobile = document.getElementById("mobile");
     const email = document.getElementById("email");
     const quesiton = document.getElementById("question");
     
     let error;

     // clear all errors
     const errorList = document.querySelectorAll(".error");

     for (let item of errorList)
     {
         item.innerHTML = "";
     }

     // ---------- VALIDATION ---------- //
     // Question
     if (quesiton.value.length === 0)
     {
         error = quesiton.parentNode.querySelector(".error");
         error.innerHTML = "Field cannot be empty";
         event.preventDefault();
     }
     
     // ---------- PATTERN MATCHING ---------- //
     let pattern = /^[a-zA-Z]{2,}$/;
     
     //  Last Name
     if (pattern.test(lastName.value) === false || pattern.test(firstName.value) === false)
     {
         error = firstName.parentNode.querySelector(".error");
         error.innerHTML = "Enter a name with at least 2 letters";
         error = lastName.parentNode.querySelector(".error");
         error.innerHTML = "Enter a name with at least 2 letters";
         event.preventDefault();
     }
        
     pattern = /^\d{10,10}$/;
     //  Mobile Phone
     if (pattern.test(mobile.value) === false)
     {
         error = mobile.parentNode.querySelector(".error");
         error.innerHTML = "Enter a 10 digit phone number";
         event.preventDefault();
     }

     // Email
     pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (pattern.test(email.value) === false)
     {
         error = email.parentNode.querySelector(".error");
         error.innerHTML = "Enter a valid email";
         event.preventDefault();
     }

    }