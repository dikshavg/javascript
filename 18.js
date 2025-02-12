// Function to calculate the total booking cost
function calculateBookingCost(numberOfTickets, passengerAge) {
    const pricePerTicket = 300; // Fixed price per ticket

    // Calculate the total cost before discount
    let totalCostBeforeDiscount = numberOfTickets * pricePerTicket;

    // Use ternary operator to check if passenger is a senior citizen (age between 60 and 100)
    let discount = (passengerAge >= 60 && passengerAge <= 100) ? 0.20 : 0;

    // Calculate the discount amount
    let discountAmount = totalCostBeforeDiscount * discount;

    // Calculate the total cost after discount
    let totalCostAfterDiscount = totalCostBeforeDiscount - discountAmount;

    // Display the result
    console.log("Total cost before discount: Rs. " + totalCostBeforeDiscount.toFixed(2));
    console.log("Discount amount: Rs. " + discountAmount.toFixed(2));
    console.log("Total cost after discount: Rs. " + totalCostAfterDiscount.toFixed(2));
}

// Sample inputs and outputs

// Example 1: Passenger is not a senior citizen
console.log("Example 1:");
calculateBookingCost(3, 45); // 3 tickets, age 45

// Example 2: Passenger is a senior citizen
console.log("\nExample 2:");
calculateBookingCost(2, 65);