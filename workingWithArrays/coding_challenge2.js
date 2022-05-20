'use strict';

/* const juliaData = [9, 16, 6, 8, 3];
const katieData = [10, 5, 6, 1, 4];
const checkDogs = function (dogsJulia, dogsKatie) {
  const correctedDogsJulia = dogsJulia.slice(1, -2);
  const allData = correctedDogsJulia.concat(dogsKatie);

  allData.forEach(function (dog, i) {
    console.log(`
    "Dog number ${
      i + 1
    } is an ${dog >= 3 ? 'adult' : 'Puppy'}, and is ${dog} years old"
      `);
  });
};

checkDogs(juliaData, katieData); */
/* const juliaData = [9, 16, 6, 8, 3];
const katieData = [10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  if (ages <= 2) {
    ages.map(function (dogAge) {
      const humanAges = 2;
      dogAge = ages;
      dogAge = humanAges * dogAge;

      return dogAge;
    });
  }
  return ages;
};
console.log(calcAverageHumanAge(katieData)); */

const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(ages => ages >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return average;
};

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// adults.length

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
const avg11 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg22 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
console.log(avg11, avg22);
console.log(avg1, avg2);
