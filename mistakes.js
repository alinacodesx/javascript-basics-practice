// ==========================================
// JavaScript Memory: Stack vs Heap
// ==========================================

// JavaScript stores data in memory (RAM) while program runs.

// Conceptually, memory is divided into:
// 1. Stack Memory
// 2. Heap Memory


// =====================
// Stack Memory
// =====================

// - Stores primitive values
// - Stores references (addresses)
// - Fast access
// - Automatically managed

let a = 10;
let b = 20;

// Stack:
// a → 10
// b → 20


// =====================
// Heap Memory
// =====================

// - Stores objects and complex data
// - Larger memory space
// - Managed by garbage collector

let obj = { name: "Alina" };

// Stack: obj → address (reference)
// Heap:  { name: "Alina" }


// =====================
// Mutable vs Immutable
// =====================

// Immutable (Primitive)
let x = 10;
x = 20;

// A new value is created. Original value is unchanged.


// Mutable (Reference)
let arr = [1, 2, 3];
arr.push(4);

// Same array is modified.


// =====================
// Reference Behavior Example
// =====================

let obj1 = { value: 5 };
let obj2 = obj1;

obj2.value = 10;

console.log(obj1.value); // 10


// =====================
// Summary
// =====================

// Stack stores primitive values and references.
// Heap stores actual objects.
// Primitive types are immutable.
// Reference types are mutable.

// Note:
// JavaScript automatically manages memory using garbage collection.