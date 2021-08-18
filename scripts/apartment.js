/*
    Date: 25 May 2021
    Author: Kyra Elyse Alday
    Topic: Assignment 02 - Sorrento by the Sea
    Description: JavaScript File (apartment.html)
 */

"use strict";

// declare variables
const today = new Date();
const content = document.getElementById("content");
const button = document.getElementById("calculate");

// click event
button.addEventListener("click", calculateCost);

// functions
function calculateCost() {
    const start = document.getElementById("startDate");
    const end = document.getElementById("endDate");
    const startDate = new Date(start.value);
    let endDate = new Date(end.value);

    // generate end date 
    let year = endDate.getFullYear();
    let month = endDate.getMonth();
    let day = endDate.getDate();

    endDate = new Date(year, month, day);

    // generate start date 
    year = startDate.getFullYear();
    month = startDate.getMonth();
    day = startDate.getDate();

    let dateStay = new Date(year, month, day);

    let stay = [];
    let oneDay;

    let totalCost = 0;

    // check event is in the future
    if ((startDate > today) && (endDate > startDate)) 
    {
        while (dateStay < endDate) {
            oneDay = { date: dateStay, cost: seasonCost(dateStay) };
            stay.push(oneDay);
            dateStay = new Date(year, month, ++day);
        }

        for (let i = 0; i < stay.length; i++) {
            totalCost += stay[i].cost;
        }

        content.innerHTML = "<strong><em>Total Cost:</em></strong> $" + totalCost;
    }
    else 
    {
        content.innerHTML = "ERROR: Invalid date selection";
    }

}

function seasonCost(date) {
    let cost = 0;

    // CASE 1: 1st February - 31st May
    if (date.getMonth() >= 1 && date.getMonth() <= 4) {
        cost = 220;
    }
    // CASE 2: 1st June - 31st August 
    else if (date.getMonth() >= 5 && date.getMonth() <= 7) 
    {
        cost = 200;
    }
    else 
    {
        // CASE 3: 1st September - 18th December 
        if (date.getMonth() >= 8 && date.getMonth() <= 10)
        {
            cost = 220;
        }
        else
        {
            // CASE 4: 19th December - 31st January
            if ((date.getDate() < 18) && (date.getMonth() === 11))
            {
                cost = 220;
            }
            else
            {
                cost = 250;
            }
        }       
    }

    return cost;
}