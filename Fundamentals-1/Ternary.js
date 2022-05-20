//const age = Number(prompt(`What's Your Age`));
let age = 22;
console.log(age);

console.log('___________________________________');

age >= 18 ? console.log(`I like to have cola`) :
    console.log(`I like to have water`);

const drink = age >= 18 ? 'Cola' : 'Water';
console.log(drink);

console.log('____________________________________');

let Drink2;
if (age >= 18) {
    Drink2 = 'Cola';
} else {
    Drink2 = 'Water';
}
console.log(Drink2);

console.log('_______________________________________');

console.log(`I'd Like to Have ${age >= 25 ? 'pepsi' : 'cola'}`);


console.log('-------------------------------------------------------------------------------------------');

const Population = 137;

console.log(`India'a Population is ${Population >= 33 ? 'Above' : 'Below'} Average`);