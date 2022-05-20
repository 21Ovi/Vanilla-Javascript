const movements = [
  200, 450, 658, 664, -456, -560, 400, 800, -1300, -7800, 8000, 5800, -8900,
  10000, 5000,
];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  }
}

//////////////////FOREACH////////////////////////////////
console.log(`///////////////////ForEach/////////////////`);

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`movement ${i + 1} ; you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(mov)}`);
  }
});

//////////////////////ForRach withj map and set////////////////////////////
console.log(`////////////////////////`);

//MAP

const currencies = new Map([
  ['USD', 'UNITED STATE DOLLOR'],
  ['EUR', 'EURO'],
  ['INR', 'INDIAN RUPEE'],
  ['GPB', 'POUND STERLING'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

//set

const currenciesUnique = new Set([
  'USD',
  'GBP',
  'INR',
  'EUR',
  'USD',
  'GBP',
  'INR',
  'EUR',
  'USD',
  'GBP',
  'INR',
  'EUR',
  'USD',
  'GBP',
  'INR',
  'EUR',
]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`);
});
