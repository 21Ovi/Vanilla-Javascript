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
lufthansa.book(239, 'Ovesh Ansari');
lufthansa.book(240, 'Kevin Mali');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
//wont work
//book.call(eurowings, 21, 'Barkat');
