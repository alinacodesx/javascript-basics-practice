// Topic-JavaScript Variables: var, let, const
// Scope, Hoisting, Temporal Dead Zone Example

// var, let , const- line by line comparison
//declaration and initialisation
 /// declared karna
// declare and initialise(pehli value dena)
// var apne app ko window mein add hota hai
//ye hamesha function scoped hota hai
// app firse declare kar sakte ho same name se and error nhi ayega
// scope (global, block , functional)
// curly braces is called block
// let hamesha apne parent braces mai use ho sakta hai
//reassignment, redeclaration
//JavaScript does full parsing first - First syntax error → ❌ STOP → rest of file ignored

//Temporal Dead Zone- utna area jitna js ko pta hai ki wo usko acess karta hai but wo app ko value nhi de sakta cuz js is compiler
//Hoisting impact per type
//Hoisting - ek variable ko jab js mein bnate hai to vo variable do hiso main tote jata hai and iska declare part upar chala jata hai and uska initiallisation part niche reh jata hai
//in const we can update the value but can't reassign the value
let a = 30;
{
    let a = 10; 
    console.log("inside:",a);
}
console.log("Outside:", a);















