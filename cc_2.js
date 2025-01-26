// Task 1: Store Inventory
let products = ["Big Mac", "Fries", "Soft Drink", "Chicken Nuggets", "Chicken Sandwich"]; // Initial Products Inventory

products.push("Oreo McFlurry"); // Adds new product to array
    console.log("Inventory:", products);

products.pop(); // Removes last product from array
    console.log("Updated Inventory:", products);  


// Task 2: Student Scores
let scores = [82, 51, 63, 75, 57]; // Initial Scores

scores[1] = 91 // Updates second value in array
    console.log("Updated Scores:", scores) // Updated Scores

let totalScores = scores.reduce((total, amount) => total + amount, 0); // Calculates total of scores
let averageScores = totalScores / scores.length // Calculates average of scores
    console.log("Average Score:", averageScores); // Average Score


// Task 3: Employee Records
let employee = {
    name: "Spongebob Squarepants",
    age: 39,
    department: "Kitchen",
    isActive: true
}; // Employee Information

employee.department = "Food" // Updates department in employee information
employee.position = "Frycook" // Adds position to employee information
    console.log("Updated Employee Information:", employee); // Updated Employee Information


// Task 4: Customer Database
let customers = [
    {name: "Patrick Star", email: "patrickstar@bikinibottom.com", purchaseAmount: 350},
    {name: "Squidward Tentacles", email: "squidward@bikinibottom.com", purchaseAmount: 500},
    {name: "Eugene Krabs", email: "crustaceouscheapskate@bikinibottom.com", purchaseAmount: 100}
]; // Initial array of customer information

customers.push({name: "Sheldon Plankton", email: "ihatethekrustykrab@bikinibottom.com", purchaseAmount: 600}); // Adds new customer information to array
    console.log("Customer List:", customers); // Customer List


// Task 5: Order Processing System
let order = {
    orderID: 49,
    customerName: "Squilliam Fancyson",
    amount: 400,
}; // Object of order properties

function calculateTax() {
    const taxRate = 0.10 // Tax Rate of 10%
    return order.amount * taxRate 
}; // Calculates Tax Amount

console.log("Order Information:", order); // Order Information
console.log("Taxed Amount:", calculateTax()); // Taxed Amount
