const plusButtons = document.querySelectorAll(".fa-plus-circle"); // Select all "plus" buttons
const minusButtons = document.querySelectorAll(".fa-minus-circle"); // Select all "minus" buttons
const deleteButtons = document.querySelectorAll(".fa-trash-alt"); // Select all "delete" buttons
const quantity = document.querySelectorAll(".quantity"); // Select all elements showing quantity
const total = document.querySelector(".total"); // Select the total price element
const prices = document.querySelectorAll(".unit-price"); // Select all unit price elements
const productCards = document.querySelectorAll(".product-card"); // Select all product card containers
const heart = document.querySelectorAll(".fa-heart"); // Select all heart icons for liking

let elem = [0, 1, 2]; // Array representing indices for the products

for (const i of elem) { // Loop over each product index
    plusButtons[i].addEventListener("click", function() { // When plus button is clicked
        quantity[i].innerHTML++; // Increase quantity by 1
        updateTotal(); // Update total price
    });
    
    minusButtons[i].addEventListener("click", function() { // When minus button is clicked
        if (quantity[i].innerHTML > 0) { // Only decrease if quantity is more than 0
            quantity[i].innerHTML--; // Decrease quantity by 1
            updateTotal(); // Update total price
        }
    });
    
    deleteButtons[i].addEventListener("click", function() { // When delete button is clicked
        productCards[i].style.display = "none"; // Hide the product card
        quantity[i].innerHTML = 0; // Set quantity to 0
        updateTotal(); // Update total price
    });
    
    heart[i].addEventListener("click", function() { // When heart icon is clicked
        if (heart[i].style.color === "red") { // If already liked
            heart[i].style.color = "black"; // Un-like it
        } else {
            heart[i].style.color = "red"; // Like it
        }
    });
}

function updateTotal() {
    let totalNum = 0; // Initialize total number
    for (let i = 0; i < prices.length; i++) { // Loop through each product
        let indPrice = parseInt(prices[i].innerHTML.replace("$", "")); // Get numeric unit price
        totalNum += indPrice * parseInt(quantity[i].innerHTML); // Add (price × quantity) to total
    }
    console.log(totalNum); // Log the total in the console
    total.innerHTML = totalNum + "$"; // Update the total price in the DOM
}
