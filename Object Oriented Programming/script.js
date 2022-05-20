'use strict';

/* 
///////////////////////////////////////////////////
////Constructor Functions and the new Operator////
//////////////////////////////////////////////////
const Person = function (firstName, birthyear) {
//instance properties
this.firstName = firstName;
this.birthYear = birthyear;
};

const ovi = new Person('Ovesh', 1999);
const David = new Person('Warner', 1988);
const Kane = new Person('Williamson', 1989);
const Jonas = new Person('Jonas', 1991);
console.log(ovi);
console.log(David);

console.log(ovi instanceof Person);

Person.hey = function () {
console.log('Hey There');
console.log(this);
};
Person.hey();
console.log(Person.hey());

///////////////////////////////////////////////////
//////////////////////Prototyle///////////////////
//////////////////////////////////////////////////
console.log(
`------------------------------------------------------------------`
);
console.log(Person.prototype);
Person.prototype.calcAge = function () {
console.log(2021 - this.birthYear);
};

ovi.calcAge();
David.calcAge();
Kane.calcAge();

// console.log(ovi.__proto__);
// console.log(ovi.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(ovi));
// console.log(Person.prototype.isPrototypeOf(Jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
// console.log(Kane.species, David.species);

// console.log(ovi.hasOwnProperty('name'));
// console.log(ovi.hasOwnProperty('firstName'));
// console.log(ovi.hasOwnProperty('species'));

///////////////////////////////////////////////////
/////Prototypal Inhertance on Built-In Objects////
//////////////////////////////////////////////////
console.log(`--------------------------------------------------------------`);
console.log(ovi.__proto__);
//Object.prototype(top of prototype chain);

// console.log(ovi.__proto__.__proto__);
// console.log(ovi.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

const arr = [1, 2, 8, 6, 4, 6, 8, 8, 5, 2, 2, 4, 6]; //new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.log(h1);
console.log(x => x + 1);
*/
///////////////////////////////////////////////////
////////////////Coding challenge 1////////////////
//////////////////////////////////////////////////
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property.
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
const Car = function (make, speed) {
this.make = make;
this.speed = speed;
};

Car.prototype.acccelerate = function () {
this.speed += 10;
console.log(`${this.make} is driving at ${this.speed} KM/H`);
};
Car.prototype.break = function () {
this.speed = this.speed - 5;
console.log(`${this.make} is driving at ${this.speed} KM/H`);
};

const BMW = new Car('BMW', 120);
const mercedes = new Car('mercedes', 90);

BMW.acccelerate();
BMW.acccelerate();
BMW.break();
BMW.acccelerate();
mercedes.acccelerate();
mercedes.acccelerate();
mercedes.acccelerate();
mercedes.break();
mercedes.acccelerate();

// BMW.Break();
// mercedes.Break();

//ES6 classes

//class declaration
class PersonCL {
constructor(fullName, birthYear) {
this.fullName = fullName;
this.birthYear = birthYear;
}
//Instance Method
//Method will be added to prototype property
calcAge() {
console.log(2021 - this.birthYear);
}
greet() {
console.log(`Hey ${this.fullName}`);
}
get age() {
return 2021 - this.birthYear;
}
//set a property that already exists
set fullName(name) {
if (name.includes(' ')) {
this._fullName = name;
} else {
alert(`${name} is not a full name`);
}
}
get fullName() {
return this._fullName;
}

//static Methods
static hey() {
console.log(`hey, there`);
console.log(this);
}
}

const ovi = new PersonCL('Ovesh Ansari', 1999);
console.log(ovi);
ovi.calcAge();
console.log(ovi.age);
console.log(ovi.__proto__ === PersonCL.prototype);
ovi.greet();

PersonCL.hey();

const account = {
owner: 'Ovesh',
movements: [200, 530, 300, 210, 220],

get latest() {
return this.movements.slice(-1).pop();
},

set latest(mov) {
this.movements.push(mov);
},
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);cs
cs
//Object.create

const PersonProto = {
calcAge() {
console.log(2021 - birthYear);
},

init(firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;
},
};
const Ovesh = Object.create(PersonProto);
console.log(Ovesh);
Ovesh.name = 'Ovesh';
Ovesh.birthYear = 1999;
Ovesh.calcAge();

*/
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
class CarCl {
constructor(make, speed) {
this.make = make;
this.speed = speed;
}

accelerate() {
this.speed += 10;
console.log(`${this.make} is driving at ${this.speed} KM/H`);
}
brake() {
this.speed = this.speed - 5;
console.log(`${this.make} is driving at ${this.speed} KM/H`);
}
get speedUS() {
return this.speed / 1.6;
}
set speedUS(speed) {
this.speed = speed * 1.6;
}
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

/* 
// Inheritance between "Classes" :Constructor funcitons

const Person = function (firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
console.log(2021 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
Person.call(this, firstName, birthYear);
this.course = course;
};

//linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
console.log(`Hello My name is ${this.firstName} and I study ${this.course}`);
};

const ovi = new Student('Ovesh', 1999, 'JavaScript');
ovi.introduce();
ovi.calcAge();

console.log(ovi.__proto__);
console.log(ovi.__proto__.__proto__);
console.log(ovi.__proto__.__proto__.__proto__);

console.log(ovi instanceof Student);
console.log(ovi instanceof Person);
console.log(ovi instanceof Object);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

*/
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed,
the EV also has the current battery charge in % ('charge' property);

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';

3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%.
Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). 
Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

const Car = function (make, speed) {
this.make = make;
this.speed = speed;
};

Car.prototype.acccelerate = function () {
this.speed += 20;
this.charge = this.charge - 1;
console.log(`${this.make} is driving at ${this.speed} KM/H `);
};
Car.prototype.break = function () {
this.speed = this.speed - 5;
console.log(`${this.make} is driving at ${this.speed} KM/H`);
};

const EV = function (make, speed, charge) {
Car.call(this, make, speed);
this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

Car.prototype.chargeBattery = function (chargeTo) {
this.charge = chargeTo;
};

EV.prototype.acccelerate = function () {
this.speed += 20;
this.charge--;
console.log(
`${thi s.make} is driving at ${this.speed} KM/H and it's battrey is ${this.charge}`
);
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.acccelerate();

*/

//Inheritance Between "Classes" :ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //instance method
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //static method
  static hey() {
    console.log(`Hey There 🙋‍♂️`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  clacAge() {
    console.log(
      `I'm ${
        2021 - this.birthYear
      } years old, but as a student I feel more like I'm ${
        2021 - this.birthYear + 10
      } Years old`
    );
  }
}

const martha = new StudentCl('Martha Jones', 1999, 'Computer Science');
martha.introduce();
martha.calcAge();

//Inheritance between Classes:Object.create

const PersonProto = {
  calcAge() {
    console.log(2021 - birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const David = Object.create(PersonProto);
const Steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const Kane = Object.create(StudentProto);
Kane.init('Kane', 1990, 'Computer Science');
Kane.introduce();
Kane.calcAge;

///////////////////////////////////////////////////////////////////

// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  //1) Public Fields(instances)
  locale = navigator.language;

  //2)private fields(instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    //protected properties
    //this._movements = []
    //this.locale = navigator.language;

    console.log(`Thanks for opening account ${owner}`);
  }
  //3)public methods
  //public interfaces

  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    }
  }
  static helper() {
    console.log(`Helper`);
  }
  //4) private Methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Ovesh', 'EUR', 2121);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

//chain
acc1.deposit(300).deposit(500).withdraw(350).requestLoan(25000).withdraw(4500);

console.log(acc1.getMovements());

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class,
   and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.acccelerate = function () {
  this.speed += 20;
  this.charge = this.charge - 1;
  console.log(`${this.make} is driving at ${this.speed} KM/H `);
};
Car.prototype.break = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} is driving at ${this.speed} KM/H`);
  return this;
};

class EVCL extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }
  acccelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is driving at ${this.speed} KM/H and it's battrey is ${
        this.#charge
      }`
    );
    return this;
  }
}

const tesla = new EVCL('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
// console.log(tesla.#charge);
tesla.acccelerate();
tesla.break().break().acccelerate().acccelerate();
