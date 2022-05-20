/* //5 falsy Valeus 0,undefined,'',null,NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Ovi')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //False

const money = 0;
if (money) {
  console.log('Enjoy');
} else {
  console.log('Earn some');
}

let height;
if (height) {
  console.log('height is defined');
} else {
  console.log('Height is not defined');
}
 */
'use strict';

/* function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const JuiceGlass = fruitProcessor(5, 10);
console.log(JuiceGlass);
const appleOrangejuice = fruitProcessor(4, 10);
console.log(appleOrangejuice); */

function fruitProcessor(banana, mango) {
  const juice = `juice with ${banana} banana and ${mango}mango`;
  return juice;
}
const JuiceGlass = fruitProcessor(23, 12);
console.log(JuiceGlass);

function describeCountry(country, population, capitalCity) {
  const monal = `${country} has ${population} million people and its Capital City is ${capitalCity}`;
  return monal;
}

const kevi = describeCountry('india', 1387, 'new dehli');
console.log(kevi);
const mali = describeCountry('korea', 50, 'Seoul');
console.log(mali);
const turk = describeCountry('turkey', 137, 'istanbul');
console.log(turk);

const mansi = 10;
const kevin = 'my name is monal and i love momos';
console.log(kevin);
