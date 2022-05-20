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
const book = lufthansa.book;

book.call(eurowings, 21, 'Barkat Ansari');
//console.log(eurowings);

book.call(lufthansa, 22, 'Mohammad Ovesh Ansari');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 582, 'Marry Cooper');

//Apply Method
//Apply method will recive all arugements as an one single array

const flightData = [21, 'Ovi'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
