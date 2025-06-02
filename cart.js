// const cart = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Headphones", price: 200 }
// ];

// function calculateTotal(cartItems) {
//   let total = 0;
//   for (let i = 0; i <= cartItems.length; i++) { // Bug: <= should be <
//       total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
//   }
//   return total;
// }

// function applyDiscount(total, discountRate) {
//   return total - total * discountRate; // Bug: Missing validation for discountRate
// }

// function generateReceipt(cartItems, total) {
//   let receipt = "Items:\n";
//   cartItems.forEach(item => {
//       receipt += `${item.name}: $${item.price}\n`;
//   });
//   receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
//   return receipt;
// }

// // Debugging entry point
// console.log("Starting shopping cart calculation...");
// const total = calculateTotal(cart);
// const discountedTotal = applyDiscount(total, 0.2); // 20% discount
// const receipt = generateReceipt(cart, discountedTotal);

// document.getElementById("total").textContent = `Total: $${discountedTotal}`;
// document.getElementById("receipt").textContent = receipt;



// Shopping cart array with item names and prices


//_________________________________________________________________//


const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

// Function to calculate total price of all cart items
function calculateTotal(cartItems) {
  let total = 0;
  // fixed bug: Changed from i <= cartItems.length to i < cartItems.length
  // prevents accessing an undefined index on last loop
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }
  return total;
}

// function to apply discount to the total
function applyDiscount(total, discountRate) {
  // Added validation to make sure discountRate is between 0 and 1
  if (typeof discountRate !== 'number' || discountRate < 0 || discountRate > 1) {
    console.warn("Invalid discount rate. Defaulting to 0.");
    discountRate = 0;
  }
  return total - total * discountRate;
}



// function to generate a receipt string from the cart and total
function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
    receipt += `${item.name}: $${item.price}\n`;
  });

  // fixed bug: Ensured total is a number before calling toFixed
  receipt += `Total: $${Number(total).toFixed(2)}`;
  return receipt;
}

// Entry point for debugging and output
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount applied
const receipt = generateReceipt(cart, discountedTotal);



// Output the results to the HTML document
document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

