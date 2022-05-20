const age = '18';
if (age === 18) {
    console.log(`You're an adult (Strict)`); //Strict
}
if (age == 18) {
    console.log(`you're an adult (Loose)`); //loose
}

const fav = prompt("Your Favourite Number?");
console.log(fav);
console.log(typeof fav);

const favNum = Number(prompt("Favourite Number?"));
console.log(favNum);
console.log(typeof favNum);

//Else if

if (favNum === 21) {
    console.log("Cool! 23");
} else if (favNum === 22) {
    console.log("22 Is Also Great");
} else if (favNum === 31) {
    console.log("31 is is also nice!");
} else {
    console.log("Not in favourite criteria");
}