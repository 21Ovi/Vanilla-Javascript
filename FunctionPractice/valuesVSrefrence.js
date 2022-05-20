const flight = 'LH234';
const ovesh = {
  Name: 'Mohammad Ovesh Ansari',
  passport: 4635462356737,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.Name = `Mr. ` + passenger.Name;

  if (passenger.passport === 4635462356737) {
    alert('checkedIn');
  } else {
    alert('wrong passport');
  }
};

checkIn(flight, ovesh);
console.log(flight);
console.log(ovesh);

//this is same as doing
//const flightNum = flight;
//const passenegr = ovesh;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(ovesh);
checkIn(flight, ovesh);
