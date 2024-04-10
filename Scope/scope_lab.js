// Lab for developing an understanding of JavaScript 
// variables, including var, let, and const

// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// To observe the scope at a global level
console.log(globalVar);     // Output: "I'm a global variable"
console.log(globalLet);     // Output: "I'm also global, but scoped with let"
console.log(globalConst);   // Output: "I'm a global constant"

// To see the scope at the block level
console.log(blockVar);  // Output: "I'm a block-scoped var"
//console.log(blockLet);  // ReferenceError

// Function-scoped variables
function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

// To observe the scope at a function level
// console.log(functionVar);   // ReferenceError
// console.log(functionLet);   // ReferenceError
// console.log(functionConst); // ReferenceError

// Reassignment of variables
{
    let reassignLet = "I'm a let string";
    console.log(reassignLet);
    reassignLet = "I'm a reassign let string";
    console.log(reassignLet);
    reassignLet = " Now I'm a reassign let number: " + 1;
    console.log(reassignLet);

    const reassignConst = "I'm a const string";
    console.log(reassignConst);
    //reassignConst = "I'm a reassign const string";
    //console.log(reassignConst); // ReferenceError

    var reassignVar = "I'm a var string";
    console.log(reassignVar);
    reassignVar = "I'm a reassign var string";
    console.log(reassignVar);
    reassignVar = " Now I'm a reassign var number: " + 2;
    console.log(reassignVar);
}
