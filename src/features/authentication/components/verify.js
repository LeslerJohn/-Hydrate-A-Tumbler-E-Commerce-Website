// Check if the user is already logged in
function isLoggedIn() {
  return localStorage.getItem("signedIn") === "true";
}

// Function to redirect to the login form
function redirectToLogin() {
  window.location.href =
    "../../features/authentication/components/sign-in-up.html";
  // You can redirect to your login form page
}

// Function to handle click on account logo
document
  .getElementById("account-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (!isLoggedIn()) {
      redirectToLogin();
    } else {
      // Perform action for logged-in user (e.g., redirect to account page)
      alert("Redirecting to account page...");
      // window.location.href = "account.html";
    }
  });

// Function to handle click on cart button
document.getElementById("cart-btn").addEventListener("click", function (event) {
  if (!isLoggedIn()) {
    redirectToLogin();
  } else {
    // Perform action for logged-in user (e.g., redirect to cart page)
    alert("Redirecting to cart page...");
    // window.location.href = "cart.html";
  }
});

// Initialize the visibility of the cart button based on authentication status
document.getElementById("cart-btn").style.display = isLoggedIn()
  ? "block"
  : "none";
