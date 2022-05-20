'use strict'

const population = [1385, 120, 41, 122, 455];
const perecentage2 = [];

function percentageOfWorld1(population) {
    const percent = population / 7900 * 100;
    return percent;
}

let i = 0;
while (i < population.length) {
    perecentage2[i] = percentageOfWorld1(population[i]);
    console.log(perecentage2[i]);
    i++;
}