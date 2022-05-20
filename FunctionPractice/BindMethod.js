'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book:function(){}
  book(flightNum, Name) {
    console.log(
      `${Name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, Name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

//book.call(eurowings, 23, 'Sarah Williams');

const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);

bookEW(23, 'Sarah Williams');
bookEW(22, 'Mohammad Ovesh Ansari');
bookEW(21, 'Sheldon Lee Cooper');

//with EventListners

lufthansa.planes = 300;
lufthansa.buyplane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyplane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value*rate;

console.log(addVAT(100));
console.log(addVAT(23));

const addVAT2 = function (value) {
  return function (rate) {
    return value + value * rate;
  };
};
const addVAT3 = addTax(0.23);
console.log(addVAT(100));
