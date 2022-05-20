'use strict';
const population = [85, 35, 1378, 66];

if (population.length == 4) {
    console.log(true);
} else {
    console.log(false);
}
function PercentageOfWorld(population) {
    const percent = population / 7900 * 100;
    return percent;
}
const percentage = [PercentageOfWorld(population[0]), PercentageOfWorld(population[1]), PercentageOfWorld(population[2]), PercentageOfWorld(population[3])];
console.log(percentage);