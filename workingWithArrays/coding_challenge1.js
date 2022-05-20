'use strict';

const juliaData = [9, 16, 6, 8, 3];
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

checkDogs(juliaData, katieData);
