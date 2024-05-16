/* const addButton = document.querySelectorAll(".add");
const minusButton = document.querySelectorAll(".minus");
const quantityDisplay = document.querySelectorAll(".quantity");

addButton.addEventListener("click", () => {
    let quantity = parseInt(quantityDisplay.textContent);
    if (quantity < 10) {
        quantity++;
        quantityDisplay.textContent = quantity;
        checkQuantityLimits(quantity);
    }
});

minusButton.addEventListener("click", () => {
    let quantity = parseInt(quantityDisplay.textContent);
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
        checkQuantityLimits(quantity);
    }
});

function checkQuantityLimits(quantity) {
    addButton.disabled = quantity >= 10;
    minusButton.disabled = quantity <= 1;
}


checkQuantityLimits(parseInt(quantityDisplay.textContent)); */

// Select all components with class ".add-cart"
const addCarts = document.querySelectorAll(".add-cart");

// Loop through each component
addCarts.forEach(addCart => {
    const addButton = addCart.querySelector(".add");
    const minusButton = addCart.querySelector(".minus");
    const quantityDisplay = addCart.querySelector(".quantity");

    addButton.addEventListener("click", () => {
        let quantity = parseInt(quantityDisplay.textContent);
        if (quantity < 10) {
            quantity++;
            quantityDisplay.textContent = quantity;
            checkQuantityLimits(quantity, addButton, minusButton);
        }
    });

    minusButton.addEventListener("click", () => {
        let quantity = parseInt(quantityDisplay.textContent);
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
            checkQuantityLimits(quantity, addButton, minusButton);
        }
    });
    
    checkQuantityLimits(parseInt(quantityDisplay.textContent), addButton, minusButton);
});

function checkQuantityLimits(quantity, addButton, minusButton) {
    addButton.disabled = quantity >= 10;
    minusButton.disabled = quantity <= 1;
}
