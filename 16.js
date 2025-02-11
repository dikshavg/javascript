// Given values
let costPrice = 3500;
let profitPercentage = 27;  // 27%
let vatPercentage = 12.7;   // 12.7%
let serviceChargePercentage = 3.87; // 3.87%

// Step 1: Calculate the Selling Price
let profit = (profitPercentage / 100) * costPrice;
let sellingPrice = costPrice + profit;

// Step 2: Calculate the Profit
// (Profit is already calculated as the difference between selling price and cost price)

// Step 3: Calculate VAT
let vat = (vatPercentage / 100) * sellingPrice;

// Step 4: Calculate Service Charge
let serviceCharge = (serviceChargePercentage / 100) * sellingPrice;

// Step 5: Calculate the Total Selling Price (Selling Price + VAT + Service Charge)
let totalSellingPrice = sellingPrice + vat + serviceCharge;

// Display the results
console.log("Selling Price: Rs. " + sellingPrice.toFixed(2));
console.log("Profit: Rs. " + profit.toFixed(2));
console.log("VAT: Rs. " + vat.toFixed(2));
console.log("Service Charge: Rs. " + serviceCharge.toFixed(2));
console.log("Total Selling Price: Rs. " + totalSellingPrice.toFixed(2));