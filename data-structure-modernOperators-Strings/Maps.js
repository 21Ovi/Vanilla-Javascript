'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
const rest = new Map();
rest.set(`name`, `classicano italiano`);
rest.set(1, `frinze`, `Italy`);
console.log(rest.set(2, `Lisbon , portugal`));

rest
  .set('categories', ['Italian', 'Pizzera', 'Organic', 'Vegitarian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

console.log(`////////////////////////////////////////////////////////////`);

const time = 8;
console.log(rest.get(time > rest.get(open) && time < rest.get('close')));

//rest.delete(2);

const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

console.log('///////////////////MAPS : ITERATION///////////////');

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'OH YEAHH!!!🔥🔥'],
  [false, 'LOL, NOOO 🤣🤣🤣'],
]);
console.log(question);

//convert objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quizz app

/* console.log(question.get('Question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Option ${key} :${value}`);
  }
}
const answer = Number(prompt('your answer ?'));
console.log(answer);

console.log(question.get(question.get('correct') === answer)); */
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log(`/////////////////MAPS to ARRAYS////////////`);
console.log([...question]);
console.log(question.entries());
console.log([...question.values()]);
console.log([...question.keys()]);
