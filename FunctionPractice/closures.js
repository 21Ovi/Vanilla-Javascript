const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} : Passenegrs`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

//console.dir(booker);

//More CLosures examples

//example 1

let f;

const g = function () {
  const b = 21;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();
//console.dir(f);

//example 2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} Passenger`);
    console.log(`there are 3 groups each with ${perGroup} Passengers`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};

//const perGroup = 1000;
boardPassenger(180, 5);
