'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: ['Via Angelo Tavanti 23', 'Firennze', 'Italy'],
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brushetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//method 2

[main, secondary] = [secondary, main];
console.log(main, secondary);

//recive 2 return values from a function

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested restructuring

const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
