const License = true;   //A
const vision = false;    //B

console.log(License && vision); //false 
console.log(License || vision); //true
console.log(!vision);   //true
console.log(License && !vision);    //true

const isTired = true;   //c
console.log(License && vision && isTired);  //false

if (License && !vision && isTired) {
    console.log("Good to drive");
} else {
    console.log("Someone else should drive");
}