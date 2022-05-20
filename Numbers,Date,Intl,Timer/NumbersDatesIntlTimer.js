//converting and checking numbers

console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//conversion
console.log(Number('23'));
console.log(+'23');

//parsing
console.log(Number.parseInt('2.5rem', 10));
console.log(Number.parseInt('e23'), 10);

console.log(Number.parseInt('30px', 10));
console.log(Number.parseFloat('2.5rem'));

console.log(Number.parseFloat('2.4r1nd'));

//check if value is NaN

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN('+20x'));
console.log(Number.isNaN(23 / 0));

//checking if number is Fininte

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20'));
console.log(Number.isFinite(21 / 0));

console.log(Number.isInteger(21));
console.log(Number.isInteger('20'));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(21.21));
console.log(Number.isInteger(21 / 0));

///////////////////MATH And ROUNDING/////////////////////////////////////////////
console.log(
  `/////////////////////////////////////////MATH And ROUNDING/////////////////////////////////////////////`
);
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); //Square Root
console.log(8 ** (1 / 3)); //cube root

console.log(Math.max(5, 18, 21, 2));
console.log(Math.max(5, 18, '21', 2));
console.log(Math.max(5, 18, '12px', 2));

console.log(Math.min(5, 18, 21, 2));
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat('10px') ** 2); // Area of a circle

console.log(Math.trunc(Math.random() * 6) + 1);
console.log(Math.trunc(Math.random() * 60) + 1);

const RandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(RandomInt(10, 20));

//rounding Integers
console.log(Math.round(1.5));
console.log(Math.round(1.3));
console.log(Math.round(1.9));

console.log(Math.ceil(21.1));
console.log(Math.ceil(21.5));
console.log(Math.ceil(21.9));

console.log(Math.trunc(21.9));
console.log(Math.trunc(-21.9));

console.log(Math.floor(21.3));
console.log(Math.floor(21.5));
console.log(Math.floor(21.9));
console.log(Math.floor(-21.3));

//Rounding Decimals

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.732).toFixed(3));
console.log(+(2.73232).toFixed(10));
console.log((2.732312312323132).toFixed(10));
console.log((2.72121).toFixed(3));

/////////////////////////////////////////////The Remainder Operator/////////////////////////////////////////////
console.log(
  `/////////////////////////////////////////////The Remainder Operator/////////////////////////////////////////////`
);
console.log(5 % 2);
console.log(8 % 3);
console.log(8 / 3);
console.log(6 % 2);
console.log(6 / 2);
console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(15));
console.log(isEven(81));

/////////////////////////////////////////////BigInt/////////////////////////////////////
console.log(
  `/////////////////////////////////////////////BigInt/////////////////////////////////////`
);

console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53);
console.log(2 ** 53 - 1);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 5);
console.log(2 ** 53 + 6);
console.log(2 ** 53 + 7);

console.log(34455687689098798687567445798n);
console.log(BigInt(64378648732478932473289));

//Operation

console.log(1000000000n + 100000000000n);
console.log(
  1627386180000n *
    1079387309192109201921029102910291029102192019201291029102912019201291029102192032827463984712094827398127390000000000n
);
//console.log(Math.sqrt(16n));  //Error

const huge =
  84093284809324793287432947398473298473289432984329432039840347932875109641956408731n;
const num = 21;
//console.log(huge * num);  //Error
console.log(huge * BigInt(num));

//Exeptipons

console.log(20n > 5);
console.log(20n > 50);
console.log(20n === 20); //false
console.log(typeof 21n);
console.log(huge + ' is really Huge!!!');

//division

console.log(10n / 2n);
console.log(10 / 2);

/////////////////////////////////////////////Creating Dates/////////////////////////////////////
console.log(
  `/////////////////////////////////////////////Creating Dates/////////////////////////////////////`
);

const now = new Date();
console.log(now);
console.log(new Date('december 24 2019'));
console.log(new Date('december 24 2019 18:06:02'));
console.log(new Date(01, 31, 1999, 04, 21, 22));
console.log(new Date(1999, 01, 31));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//working with dates

const future = new Date(2021, 10, 19, 15, 21);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(21244234125452));
console.log(Date.now());

const timetime = Date.now();
//console.log(timetime.toISOString());

console.log(future);
future.setFullYear(1999);
console.log(future);
future.setMonth(0);
console.log(future);
future.setDate(31);
console.log(future);

/////////////////////////////////////////////operations with Dates/////////////////////////////////////
console.log(
  `/////////////////////////////////////////////operations with Dates/////////////////////////////////////`
);
const newFuture = new Date(2021, 10, 19, 15, 21);
console.log(+newFuture);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const day1 = calcDaysPassed(new Date(2021, 3, 4), new Date(2021, 9, 4));
console.log(day1);

/////////////////////////////////////////////internationalizing Numbers/////////////////////////////////////
console.log(
  `/////////////////////////////////////////////internationalizing Numbers/////////////////////////////////////`
);
const num2 = 8511314.21;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
};
console.log('US:  ', new Intl.NumberFormat('en-US', options).format(num2));
console.log('Syriya:  ', new Intl.NumberFormat('ar-SY', options).format(num2));

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num2)
);

/////////////////////////////////////////////Timer/////////////////////////////////////
console.log(
  `/////////////////////////////////////////////Timer/////////////////////////////////////`
);

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log(`waiting..........`);

if (ingredients.includes('Spinach')) {
  clearTimeout(pizzaTimer);
}

//setInterval

setInterval(function () {
  const now = new Date();
  console.log(`Current Time is`, now);
}, 1000);
/* setInterval(function () {
  const now = new Date();
  console.log(`gathering...`);
}, 300);
setInterval(function () {
  console.log(`....Hacking.............Hacking.....`);
}, 500);
setInterval(function () {
  console.log(`Data Extraction`);
}, 400);
setInterval(function () {
  console.log(`.......`);
}, 600);
setInterval(function () {
  console.log(Math.trunc(Math.random() * 1000));
}, 700);
setInterval(function () {
  console.log(Math.trunc(Math.random() * 10000));
}, 1500);
setInterval(function () {
  console.log(Math.trunc(Math.random() * 10000));
}, 1000);
setInterval(function () {
  console.log(Math.trunc(Math.random() * 1000000));
}, 800);
setInterval(function () {
  const now = new Date();
  console.log(`geathering Information from your Computer`);
}, 200);
setInterval(function () {
  const now = new Date();
  console.log(`gathering...`);
}, 300);
setInterval(function () {
  console.log(`....Hacking.............Hacking.....`);
}, 500);
setInterval(function () {
  console.log(`Data Extraction`);
}, 400);
setInterval(function () {
  console.log(`.......`);
}, 600);
setInterval(function () {
  console.log(Math.trunc(Math.random() * 1000));
}, 700);
setInterval(function () {
  console.log(Math.trunc(Math.random() * 10000));
}, 1500);
setInterval(function () {
  console.log(Math.trunc(Math.random() * 10000));
}, 1000);
setInterval(function () {
  console.log(Math.trunc(Math.random() * 1000000));
}, 800);
setInterval(function () {
  console.log(Math.trunc(Math.random() * 10000) * 9999);
}, 1);
setInterval(function () {
  console.log(Math.trunc(Math.random() * 1000000) * 9999);
}, 2); */
