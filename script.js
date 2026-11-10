// Find the form on the page
const form = document.getElementById("orderForm");

// Run this code when the customer taps "Send Order"
form.addEventListener("submit", function (event) {
  // Stop the page from reloading
  event.preventDefault();

  // Read what the customer typed
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const item = document.getElementById("item").value;
  const date = document.getElementById("date").value || "Not specified";
  const notes = document.getElementById("notes").value || "None";

  // Build the message
  const message =
    "Hello Faithful Stitches and Fabrics, I would like to place an order.\n\n" +
    "Name: " + name + "\n" +
    "Phone: " + phone + "\n" +
    "Item: " + item + "\n" +
    "Date needed: " + date + "\n" +
    "Details: " + notes;

  // Open WhatsApp with the message ready to send
  const url = "https://wa.me/2349158710970?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
});
