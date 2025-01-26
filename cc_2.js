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