// ======================================
// JavaScript Operators & Conditions
// ======================================


// =====================
// Arithmetic Operators
// =====================

let a = 10;
let b = 2;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);


// =====================
// Unary Operators
// =====================

a++;
console.log("Post Increment:", a);

++a;
console.log("Pre Increment:", a);


// =====================
// Comparison Operators
// =====================

console.log("Equal (==):", 3 == "3");      // true
console.log("Strict Equal (===):", 3 === "3"); // false
console.log("Not Equal (!=):", 3 != "3");  // false
console.log("Strict Not Equal (!==):", 3 !== "3"); // true


// =====================
// Logical Operators
// =====================

let cond1 = true;
let cond2 = false;

console.log("AND (&&):", cond1 && cond2);
console.log("OR (||):", cond1 || cond2);
console.log("NOT (!):", !cond1);


// =====================
// Conditional Statements
// =====================

// Even or Odd
let num = Number(prompt("Enter a number"));

if (num % 2 === 0) {
    console.log(num, "is Even");
} else {
    console.log(num, "is Odd");
}


// Grade System
let score = Number(prompt("Enter your score"));

if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else if (score >= 50) {
    console.log("Grade: D");
} else if (score >= 0) {
    console.log("Grade: F");
} else {
    console.log("Invalid Score");
}


// =====================
// Ternary Operator
// =====================

let age = 15;
let result = age >= 18 ? "Adult" : "Not Adult";

console.log(result);