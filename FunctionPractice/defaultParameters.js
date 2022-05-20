'use strict';

const bookings = [];
const createBooking = function (
  flightNumber,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //ES5
  //numPassenger = numPassenger || 1;
  //price = price || 199;

  const booking = {
    flightNumber,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 5);
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 120);
