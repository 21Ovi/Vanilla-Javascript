//Driving license

const age = 18;

if (age >= 18) {
  console.log('Elidigble to apply for driving license');
} else {
  const yearLeft = 1;
  console.log(`Too Young wait for another ${yearLeft} Years`);
}

//century belong

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
