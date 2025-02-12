// Function to calculate total amount after discount
function calculateTotalAmount(purchaseAmount) {
    // Using ternary operator to apply discount based on the purchase amount
    let discount = (purchaseAmount < 1000) ? 0 :
                   (purchaseAmount >= 1000 && purchaseAmount <= 5000) ? 0.05 : 0.10;
  
    // Calculate the total amount after discount
    let totalAmount = purchaseAmount - (purchaseAmount * discount);
  
    // Display the result
    if (discount === 0) {
      console.log("Total amount: Rs. " + purchaseAmount);
    } else if (discount === 0.05) {
      console.log("Total amount including 5% discount: Rs. " + totalAmount.toFixed(2));
    } else {
      console.log("Total amount including 10% discount: Rs. " + totalAmount.toFixed(2));
    }
  }
  
  // Test cases
  calculateTotalAmount(999);   // Total amount: Rs. 999
  calculateTotalAmount(2000);  // Total amount including 5% discount: Rs. 1900
  calculateTotalAmount(10000);