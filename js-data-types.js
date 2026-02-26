// ======================================
// JavaScript Data Types
// ======================================

// JavaScript has two main categories of data types:
// 1. Primitive Types
// 2. Reference (Non-Primitive) Types


// =====================
// Primitive Data Types
// =====================

// string, number, boolean, null, undefined, symbol, bigint

// Primitive: copying creates an independent real copy

let a = 12;
let b = a;
a = a + 1;

console.log("a:", a); // 13
console.log("b:", b); // 12


// =====================
// Reference Data Types
// =====================

// object, array, function

// Reference: copying shares the same memory reference

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.pop();

console.log("arr1:", arr1); // [1, 2]
console.log("arr2:", arr2); // [1, 2]


// =====================
// null vs undefined
// =====================

// null: intentionally assigned empty value
// undefined: declared but not assigned

let x = null;
let y;

console.log("x:", x); // null
console.log("y:", y); // undefined


// =====================
// Symbol (Unique Value)
// =====================

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false


// =====================
// BigInt
// =====================

let bigNumber = 9007199254740991n;
let result = bigNumber + 3n;

console.log("BigInt result:", result);